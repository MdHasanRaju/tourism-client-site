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
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
      setIsLoading(true)
      return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
        }
        setIsLoading(false);
      });
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {
          setUser({})
        })
        .finally(() => setIsLoading(false))
    }


    return {
      setIsLoading,
      isLoading,
      setUser,
      user,
      setError,
      error,
      handleGoogleSignIn,
      logOut,
    };
};

export default useFirebase;