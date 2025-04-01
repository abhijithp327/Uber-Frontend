import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserProtectWrapper = ({ children }: { children: React.ReactNode }) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    if (!token) return null;

    return (
        <>
            {children}
        </>
    );
};

export default UserProtectWrapper;
