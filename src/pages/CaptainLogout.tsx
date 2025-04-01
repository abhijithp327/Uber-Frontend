import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {


    const baseUrl = import.meta.env.VITE_BASE_URL;
    const navigate = useNavigate();


    React.useEffect(() => {
        const handleLogout = async () => {
            const response = await axios.post(`${baseUrl}/captain/logout`, {}, {
                withCredentials: true
            });
            // console.log('response: ', response);
            if (response.status === 200) {
                navigate('/captain-login');
            }
        };
        handleLogout();
    }, []);

    return (
        <div>
            captain logout
        </div>
    )
}

export default CaptainLogout
