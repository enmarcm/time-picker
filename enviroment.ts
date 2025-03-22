import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDUWdjZQ6Y7H_EsUUiAJ06WEMWlk80wNg0",
    authDomain: "relojes-6f4e5.firebaseapp.com",
    projectId: "relojes-6f4e5",
    storageBucket: "relojes-6f4e5.firebasestorage.app",
    messagingSenderId: "145063581393",
    appId: "1:145063581393:web:089bd0ae4aee83a8a397f0"
  };

export const environment = {
  production: false,
  firebase: firebaseConfig
};


const app = initializeApp(firebaseConfig);