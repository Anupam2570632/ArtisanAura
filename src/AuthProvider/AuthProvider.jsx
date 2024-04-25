import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const googleProvider = new GoogleAuthProvider()
    const GoogleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    const facebookProvider = new FacebookAuthProvider()
    const FacebookSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    const githubProvider = new GithubAuthProvider()

    const GithubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const createAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const [estate, setEstate] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setEstate(data))
    }, [])


    const updateUserInformation = (name, photoURL) => {

        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }


    const logOut = () => {
        return signOut(auth)
    }

    const AuthInfo = { GoogleSignIn, FacebookSignIn, GithubSignIn, setUser, user, estate, loading, createAccount, logIn, logOut, updateUserInformation }


    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;