import { initializeApp, FirebaseApp, FirebaseOptions } from 'firebase/app';
import { Auth, initializeAuth,signInWithEmailAndPassword, onAuthStateChanged, User, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const app: FirebaseApp = initializeApp(firebaseConfig);

const auth: Auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth, User, signInWithEmailAndPassword, onAuthStateChanged };
