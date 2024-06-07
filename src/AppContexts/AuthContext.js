import React, { useContext, useState, useEffect } from "react";
import { auth } from '../config/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
const [currentUser, setCurrentUser] = useState();
const [loading, setLoading] = useState(true);

const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

const logout = () => {
    return signOut()
}

const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
}

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
    setCurrentUser(user);
    setLoading(false);
    // The useEffect hook is responsible for subscribing to the onAuthStateChanged event 
    // provided by the auth object from the Firebase configuration. 
    // This event is triggered whenever the authentication state changes, 
    // such as when a user signs in or signs out.
    });

    return unsubscribe;
}, []);

const value = {
    currentUser,
    login,
    signUp,
    forgetPassword,
    logout
};

return (
    <AuthContext.Provider value={value}>
    {!loading && children}
    </AuthContext.Provider>
);
};