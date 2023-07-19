
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  
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



let logout = document.getElementById('logout')

logout.addEventListener("click",function(){

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        window.location.href = "index.html"
      } 

    });
})



let userArr = [];


userArr =JSON.parse(localStorage.getItem('user')) 

 let butn = document.getElementById("butn");

 butn.addEventListener("click",function(){

    
    var enterData = document.getElementById('todo').value
    
    if(enterData == ''){
        
        alert("Input field cannot be blank")
        
    }
    
    else {
        // Ul
        let show = document.getElementById('show') 
        let li = document.createElement('li')
        show.appendChild(li)
        li.textContent = enterData



    let a = document.createElement('a');
    a.innerHTML = "\u00d7";
    a.href ="javascript:void(0)"
    a.className = "remove"
    li.appendChild(a)
    
    //    localStorage
        
    userArr.push({'name': enterData})
    localStorage.setItem("user", JSON.stringify(userArr) )
       
} 
   
    document.getElementById('todo').value = ""

    let btn = document.querySelector('ul');
    console.log(btn)
    btn.addEventListener('click',function (e) {
    let show = document.getElementById('show')
    let li  = e.target.parentElement
    show.removeChild(li)


 }
 )

})