import {  createContext, useEffect, useState, } from "react"
import PropTypes from 'prop-types'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import {  GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const googleProvider  = new GoogleAuthProvider();

const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const [loading,setLoading] = useState(true)
    
    const createUser = (email,password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
      if (auth.currentUser) {
        console.log('Current User:', auth.currentUser);
        return updateProfile(auth.currentUser, profile);
      }
      console.error('No user is signed in');
      return Promise.reject(new Error('No user is signed in'));
    };

    const signInUser =(email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = ()=>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }

    const signInWithFacebook = ()=>{
      setLoading(true)
      return signInWithPopup(auth, facebookProvider)
    }

    const logOut = ()=>{
      setLoading(true)
      return signOut(auth);
    }


    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        console.log('current user',currentUser)
        setUser(currentUser)
        setLoading(false)
      });
      return () =>{
        unSubscribe(); 
      }
    },[])

    const authInfo = {
      loading,
      user,
      updateUserProfile,
      createUser,
      signInUser,
      logOut,
      signInWithGoogle,
      signInWithFacebook
    }

  return (
   <AuthContext.Provider value= {authInfo}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider;

AuthProvider.propTypes={
  children: PropTypes.node
}
