import React, { createContext, useState, useContext } from "react";

// Define User interface
interface Captain {
    email: string;
    fullName: {
        firstName: string;
        lastName: string;
    };
    // [key: string]: any; // Allows extra properties if needed
}

// Define Context type
interface UserContextType {
    captain: Captain;
    setCaptain: React.Dispatch<React.SetStateAction<Captain>>;
}

// Create context without default null value
const CaptainDataContext = createContext<UserContextType | undefined>(undefined);

// Custom hook to use UserContext safely
export const useCaptainContext = () => {
    const context = useContext(CaptainDataContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};

const CaptainContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [captain, setCaptain] = useState<Captain>({
        email: "",
        fullName: {
            firstName: "",
            lastName: "",
        },
    });

    return (
        <CaptainDataContext.Provider value={{ captain, setCaptain }}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContextProvider;

export { CaptainContextProvider };
