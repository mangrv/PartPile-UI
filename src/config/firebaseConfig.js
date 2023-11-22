import firebase from 'firebase/app';
import 'firebase/auth';

// Ensure you prefix your environment variables with `PREACT_APP_` to access them in Preact
const firebaseConfig = {
  apiKey: process.env.PREACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.PREACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.PREACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.PREACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.PREACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.PREACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase with the environment variables
firebase.initializeApp(firebaseConfig);

// Export the authentication function
export const auth = firebase.auth();
