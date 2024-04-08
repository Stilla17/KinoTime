import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

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
const auth = getAuth(app);

let emailInput = document.querySelector('#login');
let passwordInput = document.querySelector('#password');
let signUpButton = document.querySelector('#signUp');

signUpButton.addEventListener('click', async (e) => {
    e.preventDefault()
    let email = emailInput.value
    let password = passwordInput.value

    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User signed up:', user);
            window.location.href = "http://localhost:5500/src/loginPage.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error signing up:', errorMessage);
        });
});