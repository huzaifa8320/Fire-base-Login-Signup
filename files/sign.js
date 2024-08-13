// Authentication 
import { createUserWithEmailAndPassword , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { collection, addDoc} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { auth, db } from "./config.mjs";

// Authentication end

// Sign_up item 
var sign_username = document.getElementById(`sign_username`)
var sign_email = document.getElementById(`sign_email`)
var sign_password = document.getElementById(`sign_password`)
var gender = document.getElementsByName(`gender`)
var gender_value;

for (let i = 0; i < gender.length; i++) {
    gender[i].addEventListener('click', function () {
        if (gender[i].checked) {
            gender_value = gender[i].value
        }

    })

}

// Eye button
var eye_btn1 = document.getElementById(`btn1`)

// Sign_up button 
var sign_btn2 = document.getElementById(`btn2`)

// Sign up in function start
sign_btn2.addEventListener(`click`, function () {
    if (sign_username.value == '') {
        Swal.fire("Pleas Enter Username 📝");
    }
    else if (sign_email.value == '') {
        Swal.fire("Pleas Enter Email 📝");
    }
    else if (sign_password.value == '') {
        Swal.fire("Pleas Enter Password 📝");
    }
    else if (gender_value == undefined) {
        Swal.fire("Pleas Select Gender 📝");
    }
    else {
        sign_btn2.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2" style="color: #ffffff;"></i>Sign up'
        createUserWithEmailAndPassword(auth, sign_email.value, sign_password.value, sign_username.value)
            .then(async (userCredential) => {
                const user = userCredential.user;
                const uid = user.uid;
                console.log(user);
                Swal.fire("Account Create Successfully ✅");
                sign_btn2.innerHTML = 'Sign up'

                const docRef = await addDoc(collection(db, "data"), {
                    uid: uid,
                    name: sign_username.value,
                    email: sign_email.value,
                    password: sign_password.value,
                    gender_user: gender_value
                });
                console.log("Document written with ID: ", docRef.id);

                sign_username.value = ''
                sign_email.value = ''
                sign_password.value = ''
                setTimeout(() => {
                    window.location.href = '../index.html'
                }, 1000);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                
                sign_btn2.innerHTML = 'Sign up'
                console.log(errorCode);
                console.log(errorMessage);
                if (errorCode == 'auth/weak-password') {
                    Swal.fire("Password should be at least 6 characters 📝");
                }
                else if (errorCode == 'auth/email-already-in-use') {
                    Swal.fire("Email already in use 📝");
                }
                else if (errorCode == 'auth/invalid-email') {
                    Swal.fire("Please enter a valid email 📝");
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