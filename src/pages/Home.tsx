import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className=''>
            <div className='bg-cover bg-[url(https://images.unsplash.com/photo-1583104942808-c55e9f2aaece?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZmljJTIwbGlnaHR8ZW58MHx8MHx8fDA%3D)] bg-red-400 h-screen pt-8 w-full flex flex-col justify-between'>
                <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />
                <div className='bg-white pb-7 p-4'>
                    <h2 className='text-2xl font-bold'>Get Started With Uber</h2>
                    <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;