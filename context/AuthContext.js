import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {
    const [exercises, setExercises] = useState([])
    const [ user, setUser ] = useState(null)
    const [loading, setLoading] = useState(true)

    const exerciseURL = 'https://wayte-backend.herokuapp.com/'

    async function getExercises(){
        const response = await fetch(exerciseURL)
        const data = await response.json()
        setExercises(data)
    }
    
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                })
            }else{
                setUser(null)
            }
            setLoading(false)
        })

        getExercises()

        return () => unsubscribe()
    }, [])
    
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        setUser(null)
        await signOut(auth)
    }



    return (
        <AuthContext.Provider value={{ user, login, signup, logout, exercises }}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}