import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_ID || 'AIzaSyB3gHx6FXAvqLx28MHZavCBUAjjwihULpM',
  authDomain: import.meta.env.VITE_AUTH_DOMAIN || 'taskmate-cb773.firebaseapp.com',
  projectId: import.meta.env.VITE_PROJECT_ID || 'taskmate-cb773',
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET || 'taskmate-cb773.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDER_ID || '682821712421',
  appId: import.meta.env.VITE_APP_ID || '1:682821712421:web:4ffc1cbd26a3fa78f25dcc',
  measurementId: import.meta.env.VITE_MEASUREMENTID || 'G-24RWZ64HN6',
};

const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

export const onMessageListener = () => {
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log('message payload :>>', payload);
      resolve(payload);
    });
  });
};
