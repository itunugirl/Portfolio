// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO8hWShnN4Tea_P0hZUi8fIg44S_j1dvM",
  authDomain: "my-portfolio-d3b4f.firebaseapp.com",
  projectId: "my-portfolio-d3b4f",
  storageBucket: "my-portfolio-d3b4f.appspot.com",
  messagingSenderId: "163858659396",
  appId: "1:163858659396:web:7da45fbc591e5e90af2411",
  measurementId: "G-ENQH9BPY4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { app, db };
