const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDnJTqyRaIao5oGAhP00HmZ2vE9CTCsBpU",
    authDomain: "vishalportfolio-e5d4b.firebaseapp.com",
    databaseURL: "https://vishalportfolio-e5d4b-default-rtdb.firebaseio.com",
    projectId: "vishalportfolio-e5d4b",
    storageBucket: "vishalportfolio-e5d4b.appspot.com",
    messagingSenderId: "547693392796",
    appId: "1:547693392796:web:2bc5657863517ac482ce59",
    measurementId: "G-NX05ZDMFBS",
  });
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

//signin user
document.getElementById("Login_form").addEventListener("submit", signin);

function signin(e) {
 e.preventDefault();

 //get email and password
 const email = document.getElementById("Username").value;
 const password = document.getElementById("password").value;


   firebase
   .auth()
   .signInWithEmailAndPassword(email, password)
   .then((result) => {
     // Signed in
     alert('Signed In Success..!');

     window.location.assign('home.html');

 
   })
   .catch((error) => {
     var errorCode = error.code;
     var errorMessage = error.message;
     console.log(errorMessage);
     alert(errorMessage);
   });
}