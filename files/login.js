import {signInWithEmailAndPassword , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth} from "./config.mjs";

onAuthStateChanged(auth, async (user) => {
    if (user) {
        window.location.href = 'files/dashboard.html'
    }
});

// Log_in item 
var log_email = document.getElementById(`log_email`)
var log_password = document.getElementById(`log_password`)

// login button 
var login_btn2 = document.getElementById(`btn2`)

// Eye button
var eye_btn1 = document.getElementById(`btn1`)

// login function
login_btn2.addEventListener('click' , function(){
    if (log_email.value == '') {
        Swal.fire("Pleas Enter Email 📝");
    }
else if (log_password.value == '') {
    Swal.fire("Pleas Enter Password 📝");
}
else{    
    login_btn2.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2" style="color: #ffffff;"></i>Log in'
    signInWithEmailAndPassword(auth, log_email.value, log_password.value)
    .then(async(userCredential) => {
        const user = userCredential.user;
        Swal.fire("Login Successfully ✅");
        log_email.value = ''
        log_password.value = ''
        login_btn2.innerHTML = 'Log in'
        setTimeout(() => {
            window.location.href = 'files/dashboard.html'
        }, 1000);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        
        if (errorCode == 'auth/network-request-failed') {
            Swal.fire("Please check your internet connection and try again 🔌");
        }
        else{
            Swal.fire("Account Not found 📝");
            setTimeout(() => {
                window.location.href = 'files/sign.html'
            }, 1000);
        }
        login_btn2.innerHTML = 'Log in'
        
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
