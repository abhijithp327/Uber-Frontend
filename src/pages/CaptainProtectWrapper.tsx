import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCaptainContext } from '../context/CaptainContext';

const CaptainProtectWrapper = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const { setCaptain } = useCaptainContext();
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
                    withCredentials: true,
                });

                console.log('response profile: ', response);

                if (response.status === 200) {
                    setCaptain(response.data.result);
                    setIsAuthenticated(true);
                }
            } catch (error) {
                navigate('/captain-login'); // Redirect if authentication fails
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, [navigate, setCaptain]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div style={{ color: 'red' }}>{error}</div>;
    if (!isAuthenticated) return null;

    return <>{children}</>;
};


export default CaptainProtectWrapper;
