import admin from 'firebase-admin';
import serviceAccount from '../taskmate-cb773-firebase-adminsdk-fbsvc-1c12d4fb08.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
