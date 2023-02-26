// import app from "./script.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// console.log(app)
const firebaseConfig = {
    apiKey: "AIzaSyB7jvomggNH0A3FGpeoIH0waog50SkNvyk",
    authDomain: "hackathon-123123.firebaseapp.com",
    databaseURL: "https://hackathon-123123-default-rtdb.firebaseio.com",
    projectId: "hackathon-123123",
    storageBucket: "hackathon-123123.appspot.com",
    messagingSenderId: "868546499947",
    appId: "1:868546499947:web:c393a3b254fa456543a82e"
  };
  
  // Initialize Firebase
   const app = initializeApp(firebaseConfig);
  console.log(app)

const auth = getAuth(app);
document.getElementById("signUpBtn").addEventListener("click", function() {
  var email =  document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var firstName =  document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  //For new registration
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    alert("Registration successfully!!");
    location.replace('index.html');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage);
    alert(error);
  });		  		  
});