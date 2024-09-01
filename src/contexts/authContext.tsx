import React, { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextType {
    isLogged: boolean;
    signIn: () => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children} : {children : ReactNode}) => {

    const [isLogged, setIsLogged] = useState<boolean>(false);

    const signIn = () => {
        setIsLogged(true);
    };

    const signOut = () => {
        setIsLogged(false);
    };

    return(
        <AuthContext.Provider value={{isLogged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () : AuthContextType => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error ('useAuth must be used within an AuthProvider');
    }
    return context;
};
