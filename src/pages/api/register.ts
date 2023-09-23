import { NextApiRequest, NextApiResponse } from 'next';
import { googleSheetCredential } from '@src/lib/constants/googlesheet-env';
import { google } from 'googleapis';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'POST') {
      const resultStatus = await writeRow(request.body.email);
      return response.status(200).json({ success: resultStatus === 200, resultStatus });
    }
  } catch (error) {
    return response.status(500).json({ error });
  }

  return response.status(200).json({ success: true });
}

export const writeRow = async (email: string) => {
  const now = new Date();
  const dateString = `${now.toDateString()} ${now.toTimeString()}`;
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: googleSheetCredential.client_email,
      client_id: googleSheetCredential.client_id,
      private_key: googleSheetCredential.private_key,
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
