export const googleSheetCredential = {
  type: 'service_account',
  project_id: process.env.NEXT_GOOGLE_SHEET_PROJECT_ID,
  private_key_id: process.env.NEXT_GOOGLE_SHEET_PRIVATE_KEY_ID,
  private_key: process.env.NEXT_GOOGLE_SHEET_PRIVATE_KEY,
  client_email: process.env.NEXT_GOOGLE_SHEET_CLIENT_EMAIL,
  client_id: process.env.NEXT_GOOGLE_SHEET_CLIENT_ID,
  auth_uri: process.env.NEXT_GOOGLE_SHEET_AUTH_URI,
  token_uri: process.env.NEXT_GOOGLE_SHEET_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.NEXT_GOOGLE_SHEET_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.NEXT_GOOGLE_SHEET_CLIENT_X509_CERT_URL,
  universe_domain: process.env.NEXT_GOOGLE_SHEET_UNIVERSE_DOMAIN,
};
