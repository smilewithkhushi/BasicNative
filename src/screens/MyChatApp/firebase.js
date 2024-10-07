import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCTdHgVlgzpQ28Kr8DvjW0OppZ5EwasCSY",
  authDomain: "mychatapp-9134a.firebaseapp.com",
  projectId: "mychatapp-9134a",
  storageBucket: "mychatapp-9134a.appspot.com",
  messagingSenderId: "633011419193",
  appId: "1:633011419193:android:68e21f3e5c56377fa8f5e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
