import { useState, useEffect } from "react";
import initializationAuthentication from "../firebase/firebase.init";
import { signInWithEmailAndPassword, GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword,  updateProfile  } from "firebase/auth";


initializationAuthentication();
const auth = getAuth();

const useFirebase =() =>{
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () =>{
    setIsLoading(true);
     return signInWithPopup(auth, googleProvider);
  }

  const signUp = (email, password, name, navigate) =>{
    setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
          setUser(user);

      // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });
        navigate('/');
      })
      .catch((error) => {
          setError(error.message);
      })
      .finally(()=> setIsLoading(false));
  };

  const login = (email, password) =>{
      return signInWithEmailAndPassword(auth, email, password)
  };

  const logOut = () =>{
    setIsLoading(true);
      signOut(auth)
      .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          setError(error.message);
        }).finally(() => setIsLoading(false));
  };

  useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user);
          } else {
              setUser({});
          }
          setIsLoading(false);
        });
  },[]);

  return {user, error, isLoading, setIsLoading, signUp, login, googleSignIn, logOut, setError, setUser};
};

export default useFirebase;