import { createContext, useContext, useState } from "react";
import api from "../utils/api";


const AuthContext = createContext(null)


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(false)


    const login = async (email, password) => {
        try {
            setAuthLoading(true)
            const payload = {
                email,
                password
            }
            const { data } = await api.post('/auth/login', payload)
            setUser(data?.user)

        } catch (error) {
            const errorMessage = error.response.data.message || 'Something went wrong'
        } finally {
            setAuthLoading(false)
        }
    }

    const register = async (payload) => {
        try {
            setAuthLoading(true)
            
            const { data } = await api.post('/auth/register', payload)
            setUser()

        } catch (error) {
            const errorMessage = error.response.data.message || 'Something went wrong'

        } finally {
            setAuthLoading(false)
        }
    }

    const resetPassword = async (email) => {
        try {
            const payload = {
                email
            }
            const { data } = await api.post('/auth/login', payload)
            setUser()

        } catch (error) {
            const errorMessage = error.response.data.message || 'Something went wrong'

        } finally {
            setAuthLoading(false)
        }
    }

    const logout = () => {

    }

    return (
        <AuthContext.Provider value={{ login, logout, resetPassword, authLoading, register }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)