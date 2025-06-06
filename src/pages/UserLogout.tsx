import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const navigate = useNavigate();
    
    React.useEffect(() => {
        const handleLogout = async () => {
            const response = await axios.post(`${baseUrl}/user/logout`, {}, {
                withCredentials: true
            });
            // console.log('response: ', response);
            if (response.status === 200) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        };
        handleLogout();
    }, []);


    return (
        <div>
            UserLogout
        </div>
    );
};

export default UserLogout;
