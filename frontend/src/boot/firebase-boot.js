import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { pathnames } from "src/router/pathnames";

export default ({ router }) => {
  initializeApp({
    apiKey: "AIzaSyDdnLYspurXeL4UIcycikWjQAVHVARWRUI",
    authDomain: "notes-to-email.firebaseapp.com",
    projectId: "notes-to-email",
    storageBucket: "notes-to-email.appspot.com",
    messagingSenderId: "1067584447925",
    appId: "1:1067584447925:web:52434fb2f40a9ea1cfa5fc",
  });

  const auth = getAuth();
  auth.onAuthStateChanged(function (user) {
    if (user) {
      router.push({ path: pathnames.home });
    } else {
      router.push({ path: pathnames.login });
    }
  });
};
