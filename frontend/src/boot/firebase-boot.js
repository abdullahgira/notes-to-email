import { initializeApp } from "firebase/app";

export default ({ app, router, store }) => {
  initializeApp({
    apiKey: "AIzaSyDdnLYspurXeL4UIcycikWjQAVHVARWRUI",
    authDomain: "notes-to-email.firebaseapp.com",
    projectId: "notes-to-email",
    storageBucket: "notes-to-email.appspot.com",
    messagingSenderId: "1067584447925",
    appId: "1:1067584447925:web:52434fb2f40a9ea1cfa5fc",
  });
};
