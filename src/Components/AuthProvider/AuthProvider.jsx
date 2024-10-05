import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth/web-extension";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { AuthContext } from "../LevelContext/LevelContext";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    //signup new user
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //login in alrady signup user
    const loginUser = (email,passoword) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,passoword);
    }

    //login with google auth provider
    const loginWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const loginWithGitHub = () =>{
        setLoading(true);
        return signInWithPopup(auth,gitHubProvider);
    }
    
    const resetPassword = (email) =>{
        return sendPasswordResetEmail(auth,email);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const updateProfileInfo = (profileChangesInfo) =>{
        return updateProfile(auth.currentUser,profileChangesInfo);
    }
    const newUser = {
        user,
        createUser,
        loginUser,
        loginWithGoogle,
        loginWithGitHub,
        resetPassword,
        logOut,
        updateProfileInfo,
        loading 
    };

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={newUser}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children:PropTypes.node.isRequired
}