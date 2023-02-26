
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

  
//   console.log(app);

  

  //----- New Registration code start	  
  const auth = getAuth(app);
  
  //----- End

  //----- Login code start	  
  document.getElementById("signInBtn").addEventListener("click", function() {
      var email =  document.getElementById("email").value;
      var password = document.getElementById("password").value;

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // localStorage.setItem("isAuthed",true);
        alert(user.email+" Login successfully!!!");
        location.replace('index.html');
        // document.getElementById("hide-1").style.display = "none";
        // document.getElementById("hide-2").style.display = "none";
        // document.getElementById('logout').style.display = 'block';
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });		  		  
  });
  //----- End

  //----- Logout code start	  
  // document.getElementById("logout").addEventListener("click", function() {
  //     signOut(auth).then(() => {
  //         // Sign-out successful.
  //         console.log('Sign-out successful.');
  //         alert('Sign-out successful.');
  //         document.getElementById('logout').style.display = 'none';
  //       }).catch((error) => {
  //         // An error happened.
  //         console.log('An error happened.');
  //       });		  		  
  // });
  //----- End

  export default app;
