import { GoogleSpreadsheet } from 'google-spreadsheet';
import cred from './credentials.json';

require('dotenv').config();

// Config variables
const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export const appendSpreadsheet = async (row: any) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: cred.client_email,
      private_key: cred.private_key,
    });

    await doc.loadInfo();

    const sheet = doc.sheetsById[String(SHEET_ID)];

    return await sheet.addRow(row, { raw: true, insert: false });
  } catch (e) {
    console.error('Error: ', e);
  }
};
