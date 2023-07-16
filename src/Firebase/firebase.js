// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
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

export const signInEmail = async ( email, password ) => {
    const user = signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    return user
  })
  .catch((error) => {
    
    return error
  });


  const resp = user.then()

  return resp
}


export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  const user = signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...

    return user
  }).catch((error) => {
    console.log({error})
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    const email = error.customData.email;
    // // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...

    return error
  })

  const resp = user.then()
  return resp
}


export const signInGuest = async () => {
  const user = signInAnonymously(auth)
  .then(() => {
    // Signed in..
  })
  .catch((error) => {
    return error
    // ...
  });

  const resp = user.then()

  return resp
}