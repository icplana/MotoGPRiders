// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzx-IFlQ9S-UyEjJDdi6b49ne03Qi2RLo",
  authDomain: "motogp-riders.firebaseapp.com",
  projectId: "motogp-riders",
  storageBucket: "motogp-riders.appspot.com",
  messagingSenderId: "143612846783",
  appId: "1:143612846783:web:248d617af309a8113f9c0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const registerEmail = async ( email, password ) => {

    const user = createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    
        return user
    })
    .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        return error
        // ..
    });

    const resp = await user.then()
    return resp
    
}