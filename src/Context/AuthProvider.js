import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    // create user 
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user login with email and password 
    const userLogin =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google sign in 
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // log out 
    const logOut = () =>{
        return signOut(auth)
    }

    // observer 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[setLoading])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        userLogin,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;