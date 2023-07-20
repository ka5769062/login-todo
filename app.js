
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
    
  const firebaseConfig = {
    apiKey: "AIzaSyDLQiMauw4M0tTF5tx8QFKkudEgMEwCmcw",
    authDomain: "my-login-project-1ff01.firebaseapp.com",
    projectId: "my-login-project-1ff01",
    storageBucket: "my-login-project-1ff01.appspot.com",
    messagingSenderId: "568694184198",
    appId: "1:568694184198:web:6f54403d146c578b1e6687",
    measurementId: "G-WW227NGTS3"
  };

  const app = initializeApp(firebaseConfig);


  const auth =getAuth();

  let reg = document.getElementById("reg")

  console.log(email)
  
  reg.addEventListener("click",function(){
    
    let email=document.getElementById("emaail").value
    let password=document.getElementById("passwoord").value
     


  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      
      swal({
        icon: "success",
        text:"registered sucessfully"
      });
      
      console.log("sucessful",user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
     
      swal({
        icon: "error",
        text:"registeration failed"
      });
     
      console.log("error",errorMessage)

      // ..
    });


  })




 let logn = document.getElementById("logn")
  
 logn.addEventListener("click",function(){

 let email =  document.getElementById("email").value
 let password =  document.getElementById("password").value


 signInWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
   // Signed in 
   const user = userCredential.user;
 
  swal({
    icon: "success",
    text:"loged in sucessfully"
  });

  setTimeout(() => {
    window.location.href = "todo.html"
    
  }, 2000);


   console.log( "succesful login",user)
   // ...

  })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   swal({
    icon: "error",
    text:"loged in failed"
  });
   console.log( "failed login",errorMessage)
 });


 })





























let container = document.querySelector('.container')
let regBtn = document.querySelector('.regBtn')
let loginBtn = document.querySelector('.loginBtn')
// let emal = document.getElementById('emal').value
// let  paswrd = document.getElementById('paswrd').value




// FOR CSS

loginBtn.addEventListener("click",function(){

  container.classList.add("active")
   
})

regBtn.addEventListener("click",function(){

  container.classList.remove("active")
   

  
})




























