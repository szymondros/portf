import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";
import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyCVHLPcluoU-lu_9WvUnIVnCb4oBd-EjB4",
    authDomain: "sd-portfolio-1a1de.firebaseapp.com",
    databaseURL: "https://sd-portfolio-1a1de-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sd-portfolio-1a1de",
    storageBucket: "sd-portfolio-1a1de.appspot.com",
    messagingSenderId: "23531378069",
    appId: "1:23531378069:web:ab5080322fc08bb428929c",
    measurementId: "G-WNHCGNT4D5"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;