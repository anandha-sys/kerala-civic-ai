import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyBde3vruSdhdhicTPksvYahkoQ5b_1PnlQ",
  authDomain: "kerala-civic-ai.firebaseapp.com",
  projectId: "kerala-civic-ai",
  storageBucket: "kerala-civic-ai.firebasestorage.app",
  messagingSenderId: "664839543982",
  appId: "1:664839543982:web:10f23d3ee262408a4ca13f",

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);
