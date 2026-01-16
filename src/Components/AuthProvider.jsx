'use client'
import React, { createContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';


const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
    
  const checkAuth = () => {
        setLogged(document.cookie.includes('auth=true'));
    }
    useEffect(() => {
     checkAuth()
    }, []);
    
  const info = {
    logged
  }
 
  return <AuthContext value={info}>{children}</AuthContext>;
};

export default AuthProvider;