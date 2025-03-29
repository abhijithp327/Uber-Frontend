import React, { createContext, useState, useContext } from "react";

// Define User interface
interface User {
    email: string;
    fullName: {
        firstName: string;
        lastName: string;
    };
    // [key: string]: any; // Allows extra properties if needed
}

// Define Context type
interface UserContextType {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

// Create context without default null value
const UserDataContext = createContext<UserContextType | undefined>(undefined);

// Custom hook to use UserContext safely
export const useUserContext = () => {
    const context = useContext(UserDataContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};

const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>({
        email: "",
        fullName: {
            firstName: "",
            lastName: "",
        },
    });

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserContextProvider;

export { UserContextProvider };
