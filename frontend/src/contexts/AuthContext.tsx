import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { 
  type User as FirebaseUser,
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import type { AuthContextType } from '../types/auth.types';
import { auth } from '../config/firebase';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to access auth context across the page
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

// Provides auth state and functions to children components
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(result.user)

    } catch (error) {
      console.error('Login failed: ', error);
      throw error
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);

    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  const value: AuthContextType = {
    currentUser,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
