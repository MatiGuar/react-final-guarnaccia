import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5UqQfAtE0y5GVK-0LSUm2FZForbPUPMw",
  authDomain: "coderhouse-ecommerce-serbios.firebaseapp.com",
  projectId: "coderhouse-ecommerce-serbios",
  storageBucket: "coderhouse-ecommerce-serbios.appspot.com",
  messagingSenderId: "842427354741",
  appId: "1:842427354741:web:aa3d41a06f1d7b941cf23c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
