import { createContext, useContext, useEffect, useState } from "react";

//contexto
const AuthContext = createContext(null)

//provider
export function AuthProvider({ children }){
    const [auth, setAuth] = useState(null);

    //localStorage
    useEffect(() => {
        const storageAuth = localStorage.getItem('auth')
        if (storageAuth){
            setAuth(JSON.parse(storageAuth));
        }

    }, []);

    //método signin
    const signIn = async ({ username, password}) => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', { 
                method: 'POST',
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            if(!response.ok){
                throw new Error('Erro na autenticação')
            }

            const data = await response.json();

            localStorage.setItem('auth', JSON.stringify(data));
            setAuth(data);
            return data;
        }catch (error) {
            console.error('Erro na autenticação', error)
            throw error
        }
    };

    //método signOut
    const signOut = () => {
        localStorage.removeItem('auth');
        setAuth(null);
    };

    return(
        <AuthContext.Provider value={{ auth, signIn, signOut }}>{children}</AuthContext.Provider>
    );    
}

//custom hook
export const useAuth = () => useContext(AuthContext);
