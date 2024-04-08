import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signInWithPopup, signInWithEmailAndPassword, signOut, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
// import './logOut.js'
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
const provider = new GoogleAuthProvider()

const signInWithGoogle = document.querySelector('#signInWithGoogle');
const signUpBtn = document.querySelector('#signUp');
const signIn = document.querySelector('#signIn');

const emailInput = document.querySelector('#login')
const passwordInput = document.querySelector('#password')

const chpok = document.querySelector('.chpok')
const alertDanger = document.createElement('div')

signUpBtn.addEventListener('click', () => {
    window.location.href = "http://localhost:5500/src/registerPage.html"
    console.log("asdsa");
})

const userSignInWithEmailAndPassword = async () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();


    // if (email || password) {
    //     alert("erorororororoorroror")
    //     return Promise.reject('pochtani kiritmadingiz')
    // }

    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.location.href = "http://localhost:5500/src/index.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            showAlert()
        });
}

const showAlert = () => {
    alertDanger.innerHTML = `<p class="text-red-800 p-2 font-bold">Login warning</p>`;
    chpok.prepend(alertDanger);
};

const userSignIn = async () => {
    signInWithPopup(auth, provider)
        .then((res) => {
            const user = res.user
            window.location.href = "http://localhost:5500/src/index.html"
            console.log(user);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message
        })
}

signInWithGoogle.addEventListener('click', userSignIn)
signIn.addEventListener('click', userSignInWithEmailAndPassword)
