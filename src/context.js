import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const Context = createContext();

export const useGlobalContext = () => useContext(Context);

export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    firstName: '',
    gender: '',
    lastName: '',
    region: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    DOB: '',
    desiredRegion: '',
    role: 'user',
  });

  useEffect(() => {}, []);

  return <Context.Provider value={{ setUserData, userData }}>{children}</Context.Provider>;
};
