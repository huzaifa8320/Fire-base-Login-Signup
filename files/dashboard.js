import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { auth, db } from "./config.mjs";

let name_user = document.getElementById('name_user')
let email_user = document.getElementById('email_user')
let password_user = document.getElementById('password_user')
let gender_user = document.getElementById('gender_user')
let logout = document.getElementById('logout')
let main = document.getElementById('main')
let loader_div = document.getElementById('loader_div')

main.style.display = 'none'
onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log('user is log');
        
        const uid = user.uid;
        const querySnapshot = await getDocs(collection(db, "data"));
        querySnapshot.forEach((doc) => {
            if (doc.data().uid == user.uid) {
                name_user.innerHTML = `${doc.data().name.slice(0,1).toUpperCase()}${doc.data().name.slice(1)}`
                email_user.innerHTML = doc.data().email
                password_user.innerHTML = doc.data().password
                gender_user.innerHTML = `${doc.data().gender_user.slice(0,1).toUpperCase()}${doc.data().gender_user.slice(1)}`
            }
            loader_div.style.display = 'none'
            main.style.display = 'block'
        });
    } else {
        window.location.href = '../index.html'
    }
});

logout.addEventListener('click', function () {
    Swal.fire({
        title: "Do you want to Logout Your Account?",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`
      }).then((result) => {
        if (result.isConfirmed) {
          signOut(auth).then(() => {
            console.log('Sign-out successful.');
    
        }).catch((error) => {
            console.log('An error happened');
        });
        }
      });
    
})