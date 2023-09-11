import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {

  apiKey: "AIzaSyD_99g_Xbo2bq6Zrz3Pt4F971DupcF8KvI",

  authDomain: "chatagpt-b9e41.firebaseapp.com",

  projectId: "chatagpt-b9e41",

  storageBucket: "chatagpt-b9e41.appspot.com",

  messagingSenderId: "635411781566",

  appId: "1:635411781566:web:3c703f06f01ddbfa7b8bef",

  measurementId: "G-GZG5N0S0Y8"

};

  

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {app, db, storage };