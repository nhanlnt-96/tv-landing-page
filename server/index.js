const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
require('dotenv').config();

const port = process.env.PORT || 3001;
const app = express();
const auth = new google.auth.GoogleAuth({
  keyFile: 'credentials.json',
  scopes: 'https://www.googleapis.com/auth/spreadsheets'
});
let client;
(async () => {
  client = await auth.getClient();
})();
const googleSheet = google.sheets({ version: 'v4', auth: client });
const spreadsheetId = process.env.SPREADSHEET_ID;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
  res.send('Welcome to Tan Van Education System');
})

app.post('/register', async (req, res) => {
  const { fullName, phoneNumber, classes } = req.body;
  try {
    const response = await googleSheet.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: 'Sheet1!A2:D',
      valueInputOption: 'RAW',
      resource: {
        values: [[fullName, phoneNumber, classes, 'Chưa liên hệ']]
      }
    });
    if (response.status === 200) {
      res.status(201).json({ success: true, data: response.config.data.values });
    } else {
      res.status(400).json({ success: false, response });
    }
  } catch (err) {
    res.status(400).json(err);
  }
})

app.listen(port, () => {
  console.log(`server connected to port ${port}`)
})
