// Authentication 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth ,  createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDBFRQk4_fJN9y92AVbBH4h3kHYSwLGAlo",
    authDomain: "website-no--1.firebaseapp.com",
    projectId: "website-no--1",
    storageBucket: "website-no--1.appspot.com",
    messagingSenderId: "569980740275",
    appId: "1:569980740275:web:8b392af2daf8eb7e5706c6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Authentication end

// Sign_up item 
var sign_username = document.getElementById(`sign_username`)
var sign_email = document.getElementById(`sign_email`)
var sign_password = document.getElementById(`sign_password`)

// var sign_fill_condition = true

// Eye button
var eye_btn1 = document.getElementById(`btn1`)

// Sign_up button 
var sign_btn2 = document.getElementById(`btn2`)

// Sign up in function start
sign_btn2.addEventListener(`click`, function () {
    if (sign_username.value == '') {
        Swal.fire("Pleas Enter Username 📝");
    }
    else if(sign_email.value == ''){
        Swal.fire("Pleas Enter Email 📝");
    }
    else if(sign_password.value == ''){
        Swal.fire("Pleas Enter Password 📝");
    }
    
    else{
    createUserWithEmailAndPassword(auth, sign_email.value, sign_password.value , sign_username.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire("Account Create Successfully ✅");
        setTimeout(() => {
            window.location.href = '../index.html'
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        if (errorCode) {
            Swal.fire("Password should be at least 6 characters");
        }
      });
    }
})

// Eye function start
eye_btn1.addEventListener(`click`, function (e) {   
    if (e.target.parentElement.previousElementSibling.id == `log_password`) {
        var log_type = e.target.parentElement.previousElementSibling.type

        if (log_type == `password`) {
            btn1.innerHTML = `<i class="bi bi-eye-fill"></i>`
            log_password.setAttribute(`type`, `text`)
        }
        else {
            btn1.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`
            log_password.setAttribute(`type`, `password`)
        }
    }
    else if (e.target.parentElement.previousElementSibling.id == `sign_password`) {
        var sign_type = e.target.parentElement.previousElementSibling.type

        if (sign_type == `password`) {
            btn1.innerHTML = `<i class="bi bi-eye-fill"></i>`
            sign_password.setAttribute(`type`, `text`)
        }
        else {
            btn1.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`
            sign_password.setAttribute(`type`, `password`)
        }
    }
})
// Eye function end