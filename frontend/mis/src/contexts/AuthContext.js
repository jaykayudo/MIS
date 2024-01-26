import { useState, useEffect, createContext, } from "react";
import axios from "axios";

export const AuthContext = createContext();



export const AuthContextProvider = ({children})=>{
    const [loggedIn, setLoggedIn] = useState(false)
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    useEffect(()=>{
        if(localStorage.getItem('token')){
        }
     },[])
    const logUserIn =(data)=>{
        // localStorage.setItem('token',data.token)
        // setToken(data.token)
        // axios.defaults.headers.common['Authorization'] = `Token ${data.token}`
        setLoggedIn(true)
        setUser(data)
        // axios.get().then(res=>{
        // })
        // const today = new Date()
        // const expiry = new Date(data.expiry)
        // if(today >= expiry){
        //     logUserOut()
        // }else{
        //     setTimeout(()=>{
        //         logUserOut()
        //         message.loading({
        //             content:"Logging User Out. Token Expired",
        //             duration: 1,
        //             key:"loggout"
        //         })
        //     },expiry - today)
        // }
    }
    const logUserOut = ()=>{
        setLoggedIn(false)
        setToken(null)
        setUser(null)
        localStorage.removeItem('token')
        axios.defaults.headers.common['Authorization'] = null
        
    }
    return (
        <AuthContext.Provider value={
            {
                loggedIn,
                token,
                user,
                logUserIn,
                logUserOut
            }
        }>
            {children}
        </AuthContext.Provider>
    );
    }