import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'POST') {
      const resultStatus = await writeRow(request.body.email);
      return response.status(200).json({ success: resultStatus === 200, resultStatus });
    }
  } catch (error) {
    return response.status(500).json({ error: 'Internal server error' });
  }

  return response.status(200).json({ success: true });
}

export const writeRow = async (email: string) => {
  const now = new Date();
  const dateString = `${now.toDateString()} ${now.toTimeString()}`;
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.NEXT_GOOGLE_SHEET_CLIENT_EMAIL,
      client_id: process.env.NEXT_GOOGLE_SHEET_CLIENT_ID,
      private_key: process.env.NEXT_GOOGLE_SHEET_PRIVATE_KEY,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  // google spread sheet api 가져오기
  const googleSheet = google.sheets({
    version: 'v4',
    auth,
  });
  const result = await googleSheet.spreadsheets.values.append({
    spreadsheetId: '1u1gRgpx7PEKYkG8VPfqQZQ2BI5c2OHaj0UnYs5uaQ6E',
    range: 'A:B',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [[email, dateString]] },
  });
  return result.status;
};
