import React,{useState, useEffect} from 'react';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged ,
  signOut,
} from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
            setUser(user);
        })
        .catch(error => {
            console.log(error.message)
            setError(error.message)
        })
    }


    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        
      }
    });

    const logOut = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
          })
          .catch((error) => {
            // An error happened.
          });
    }


    return {
      user,
      handleGoogleSignIn,
      logOut,
    };
};

export default useFirebase;