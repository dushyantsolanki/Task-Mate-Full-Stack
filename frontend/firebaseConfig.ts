import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyB3gHx6FXAvqLx28MHZavCBUAjjwihULpM',
  authDomain: 'taskmate-cb773.firebaseapp.com',
  projectId: 'taskmate-cb773',
  storageBucket: 'taskmate-cb773.firebasestorage.app',
  messagingSenderId: '682821712421',
  appId: '1:682821712421:web:4ffc1cbd26a3fa78f25dcc',
  measurementId: 'G-24RWZ64HN6',
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
