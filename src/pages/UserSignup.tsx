import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {  useUserContext } from "../context/UserContext";



const UserSignup = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL;

    const navigate = useNavigate();

    const { user, setUser } = useUserContext();
    


    const [firstname, setFirstName] = React.useState<string>('');
    const [lastname, setLastName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newUser = {
            fullname: {
                firstname,
                lastname
            },
            email,
            password
        };

        const response = await axios.post(`${baseUrl}/user/register`, newUser);
        console.log('response: ', response);
        if (response.status === 201) {
            const data = response.data;
            setUser(data?.result);
            localStorage.setItem('token', data?.result.token);
            navigate('/home');
        };

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        
    };


    return (
        <div className='p-6 h-screen flex flex-col justify-between'>

            <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />
            <div>

                <form className='flex flex-col gap-4 mt-6' onSubmit={handleSignup}>
                    <h2 className='text-xl font-bold'>Let's Get Started</h2>

                    <div className='w-1/2 flex items-center justify-between gap-3'>

                        <div className='flex flex-col gap-1'>
                            <label className='text-sm font-medium' htmlFor="email">First Name</label>
                            <input
                                className='bg-gray-100 px-4 py-2 rounded-md w-[160px] placeholder:text-sm'
                                type="text"
                                name="firstname"
                                id="firstname"
                                value={firstname}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder='Enter First Name'
                                required
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='text-sm font-medium' htmlFor="email">Last Name</label>
                            <input
                                className='bg-gray-100 px-4 py-2 rounded-md w-[160px] placeholder:text-sm'
                                type="text"
                                name="lastname"
                                id="lastname"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder='Enter Last Name'
                                required
                            />
                        </div>
                    </div>

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
                    <button className='w-full mt-2 bg-black text-white font-medium py-2 rounded' type='submit'>Sign Up</button>

                    <Link to={'/login'}><p className='text-sm text-center'>Already have an account? <span className='font-bold text-black'>Login here</span></p></Link>
                </form>
            </div>

            {/* <div>
                <Link to={'/captain-login'} className='flex items-center justify-center w-full bg-green-600 text-white font-medium py-2 rounded' type='submit'>Login as a Captain</Link>
            </div> */}

            <div>
                <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
                    Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
            </div>

        </div>
    );
};

export default UserSignup;