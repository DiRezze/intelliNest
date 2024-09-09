import React, { createContext, ReactNode, useContext, useState} from 'react';
import { auth, signInWithEmailAndPassword, onAuthStateChanged, User } from '../config/firebaseConfig';

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (email : string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType|undefined>(undefined);

export const AuthProvider: React.FC<{ children : ReactNode}> = ({children}) =>{
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
  
    const signIn = async (email: string, password: string) => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Erro ao autenticar', error);
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    const signOut = async () => {
        try {
            await auth.signOut();
            setIsAuthenticated(false);
            setUser(null);
        } catch (error) {
            console.error('Erro ao deslogar', error);
        }      
    }
  
    React.useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setIsAuthenticated(!!user);
      });
  
      return () => unsubscribe();
    }, []);
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, user, signIn, signOut}}>
        {children}
      </AuthContext.Provider>
    );
  
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};