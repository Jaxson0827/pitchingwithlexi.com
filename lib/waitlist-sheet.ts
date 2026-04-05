import { google } from "googleapis";

export async function appendWaitlistToSheet(params: {
  email: string;
  name: string;
  phone: string;
}): Promise<void> {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim();
  const sheetId = process.env.WAITLIST_GOOGLE_SHEET_ID?.trim();
  const range =
    process.env.WAITLIST_SHEET_RANGE?.trim() || "waitlist!A:D";

  if (!raw || !sheetId) {
    throw new Error("Waitlist sheet is not configured");
  }

  let credentials: Record<string, unknown>;
  try {
    credentials = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    throw new Error("Invalid GOOGLE_SERVICE_ACCOUNT_JSON");
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const row = [
    new Date().toISOString(),
    params.email,
    params.name,
    params.phone,
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [row],
    },
  });
}
