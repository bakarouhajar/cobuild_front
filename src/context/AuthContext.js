import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

    const saveToken = (token) => {
        localStorage.setItem('authToken', token);
        setAuthToken(token);
    };

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken: saveToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);