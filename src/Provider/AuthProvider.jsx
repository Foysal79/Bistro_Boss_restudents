import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);


const AuthProvider = ({children}) => {


    const axiosPublic = useAxiosPublic();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
          setLoading(true);
          return signOut(auth);
    }



    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('current user', currentUser);
        if(currentUser)
        {
            /// get token and store client
            const userInfo = {
                email : currentUser.email
            }
            axiosPublic.post('/jwt', userInfo)
            .then(res => {
                if(res.data.token)
                {
                    localStorage.setItem('access-token', res.data.token)
                }
            })

        }
        else{
            /// TO Do = remove token ( if token stored in the client side : local storage, caching, in memory )
            localStorage.removeItem('access-token')

        }
        setLoading(false);
     } )

     return () => {
        return unsubscribe();
     }


    }, [axiosPublic])





    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn

    }




    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;