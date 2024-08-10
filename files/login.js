// Log_in item 
var log_email = document.getElementById(`log_email`)
var log_password = document.getElementById(`log_password`)

// login button 
var login_btn2 = document.getElementById(`btn2`)

// Eye button
var eye_btn1 = document.getElementById(`btn1`)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

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


// login function
login_btn2.addEventListener('click' , function(){
if (log_email.value == '') {
    Swal.fire("Pleas Enter Email 📝");
}
else if (log_password.value == '') {
    Swal.fire("Pleas Enter Password 📝");
}
else{
    signInWithEmailAndPassword(auth, log_email.value, log_password.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Swal.fire("Login Successfully ✅");
        setTimeout(() => {
            window.location.href = 'files/dashboard.html'
        }, 2000);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire("Account Not found 📝");
        setTimeout(() => {
            window.location.href = 'files/sign.html'
        }, 2000);
    })}
    
    
})
// login function end

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
