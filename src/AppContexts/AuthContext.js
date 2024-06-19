    import React, { useContext, useState, useEffect } from "react";
    import { auth } from '../config/firebase.config';
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";

    const AuthContext = React.createContext();

    export const useAuth = () => {
    return useContext(AuthContext);
    };

    export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
    return setPersistence(auth, browserLocalPersistence).then(() => {
        return signInWithEmailAndPassword(auth, email, password);
    });
    };

    const logout = () => {
    return signOut().then(() => {
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
    });
    };

    const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
    };

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        setCurrentUser(user);
        } else {
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
        }
        setLoading(false);
    });

    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
    }

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
