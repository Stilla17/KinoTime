import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBhZgWIwznZ3uRgK-NVsVEnRY42OI3OGss",
    authDomain: "movies-73b1e.firebaseapp.com",
    projectId: "movies-73b1e",
    storageBucket: "movies-73b1e.appspot.com",
    messagingSenderId: "667594968944",
    appId: "1:667594968944:web:abe35ff4daa20ba54149b5",
    measurementId: "G-0RCWJBV70C"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth()

const signOutBtn = document.querySelector('#exit')

const userSignOut = async () => {
    signOut(auth).then(() => {
        window.location.href = "http://localhost:5500/src/loginPage.html"
        // alert("You have signed out succesfully!")
    }).catch((error) => {
        alert("error")
    })
}

signOutBtn.addEventListener('click', userSignOut)