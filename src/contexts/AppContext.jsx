import { createContext, useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";

const AppContext = createContext()


export const AppProvider = ({ children }) => {
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 1000)
    }, [])

    if (loader) {
        return <Loader />
    }
    return (
        <AppContext.Provider value={{ loader, setLoader }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)
