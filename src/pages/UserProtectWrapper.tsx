import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUserContext } from '../context/UserContext';

const UserProtectWrapper = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
       const { setUser } = useUserContext();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
                    withCredentials: true, 
                });

                if (response.status === 200) {
                    setUser(response.data.result);
                    setIsAuthenticated(true);
                }
            } catch (error) {
                navigate('/login'); // Redirect if authentication fails
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, [navigate, setUser]);

    if (isLoading) return <div>Loading...</div>;
    if (!isAuthenticated) return null;

    return <>{children}</>;
};

export default UserProtectWrapper;
