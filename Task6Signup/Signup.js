console.log("Sign Up Page");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/127.0.0.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/127.0.0.1/firebase-auth.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/127.0.0.1/firebase-auth.js";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMvI3v09Fdb_j8RQ-HmfaoaB0TNUQfqpY",
    authDomain: "signuppage-22156.firebaseapp.com",
    databaseURL: "https://signuppage-22156-default-rtdb.firebaseio.com",
    projectId: "signuppage-22156",
    storageBucket: "signuppage-22156.appspot.com",
    messagingSenderId: "292654102201",
    appId: "1:292654102201:web:c29db9c028c8fd4d00cd68",
    measurementId: "G-QH6X44Q1JL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

submitData.addEventListener('click', (e) => {

    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;



    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...user.uid
            alert('User created successfully')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage)
        });
});
