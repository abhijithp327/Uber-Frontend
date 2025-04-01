import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CaptainProtectWrapper = ({ children }: { children: React.ReactNode }) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        if (!token) {
            navigate("/captain-login");
        }
        const getCaptainProfile = async () => {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                const data = await response.data;
                console.log('data: ', data);
            }
        }
    }, [token, navigate]);

    if (!token) return null;

    return (
        <>
            {children}
        </>
    );
};

export default CaptainProtectWrapper;
