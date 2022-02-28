import { useState, useEffect } from "react";
import initializationAuthentication from "../firebase/firebase.init";
import { signInWithEmailAndPassword, getIdToken, GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword,  updateProfile  } from "firebase/auth";


initializationAuthentication();
const useFirebase = () =>{
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [count, setCount] = useState(0);
    const [error, setError] = useState('');
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('');
          const newUser = { email, displayName: name };
          setUser(newUser);

          // send name to firebase after creation
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
          }).catch((error) => {
          });
          navigate('/');

        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    const emailSignIn = (email, password) =>{
      return signInWithEmailAndPassword(auth, email , password);
    }

    const googleSignIn = (location, navigate) => {
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          setAuthError('');
          const destination = location?.state?.from || '/';
          navigate(destination);
        }).catch((error) => {
          setAuthError(error.message);
        }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          getIdToken(user)
          .then(idToken =>{
            console.log(idToken);
            setToken(idToken);
          })
        } 
        else {
          setUser({})
        }
        setIsLoading(false);
      });
    }, [auth]);

    const logOut = () => {
      setIsLoading(true);
      signOut(auth)
        .then(() => {
          setUser({});
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
    };

    return {user, error, token, isLoading, authError, admin, count, googleSignIn, logOut, setError, setIsLoading, registerUser, emailSignIn, setCount};
};

export default useFirebase;