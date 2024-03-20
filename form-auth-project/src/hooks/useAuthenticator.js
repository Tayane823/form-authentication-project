import {db} from '../firebase/config'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'
import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    const checkIfIsCancelled = () => {
        if (cancelled) {
            return;
        }
    }

    setLoading(true)

    const createUser = async (data) => {

        checkIfIsCancelled()

        setLoading(true)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password,
            )
    
            await updateProfile(user, {
                displayName: data.displayName
            })
            
        } catch (error) {
            console.log(error.message)
            console.log(typeof error)
        }

        setLoading(false)

    }

    useEffect(() => {
        return () => setCancelled(true)
    })

    return{
        auth,
        createUser,
        error,
        loading
    }

}