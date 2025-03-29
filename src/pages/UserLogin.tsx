import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from "../context/UserContext";
import axios from 'axios';

const UserLogin = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL;

    const navigate = useNavigate();

    const { user, setUser } = useUserContext();

    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            email,
            password
        };

        const response = await axios.post(`${baseUrl}/user/login`, userData);
        console.log('response: ', response);
        if (response.status === 200) {
            const data = response.data;
            setUser(data?.result);
            navigate('/home');
        }
    };


    return (
        <div className='p-6 h-screen flex flex-col justify-between'>

            <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />
            <div>

                <form className='flex flex-col gap-4 mt-6' onSubmit={handleLogin}>
                    <h2 className='text-xl font-bold'>What's your email?</h2>
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm font-medium' htmlFor="email">Email</label>
                        <input
                            className='bg-gray-100 px-4 py-2 rounded-md placeholder:text-sm'
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter email'
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm font-medium' htmlFor="password">Password</label>
                        <input
                            className='bg-gray-100 px-4 py-2 rounded-md placeholder:text-sm'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            id="password"
                            placeholder='Enter password'
                            required
                        />
                    </div>
                    <button className='w-full mt-2 bg-black text-white font-medium py-2 rounded' type='submit'>Login</button>

                    <Link to={'/sign-up'}><p className='text-sm text-center'>Don't have an account? <span className='font-bold text-black'>Sign-up</span></p></Link>
                </form>
            </div>

            <div>
                <Link to={'/captain-login'} className='flex items-center justify-center w-full bg-green-600 text-white font-medium py-2 rounded' type='submit'>Sign-in as Captain</Link>
            </div>


        </div>
    );
};

export default UserLogin;