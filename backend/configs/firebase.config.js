import admin from 'firebase-admin';
import serviceAccount from '../taskmate-cb773-firebase-adminsdk-fbsvc-768bbd6177.json' assert { type: 'json' };
// import fs from 'fs';
// import path from 'path';
// import dotenv from 'dotenv';

// dotenv.config();

// Build absolute path to JSON
// const serviceAccountPath = path.resolve(process.env.GOOGLE_APPLICATION_CREDENTIALS);
// const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf-8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
