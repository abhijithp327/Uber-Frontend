import React from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {

        const [email, setEmail] = React.useState<string>('');
        const [password, setPassword] = React.useState<string>('');
        const [data, setData] = React.useState({});

        const handleCaptainLogin = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setData({ email, password }); // State update (asynchronous)
          };

    return (
        <div className='p-6 h-screen flex flex-col justify-between'>

        <img className='w-16' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="logo" />
        <div>

            <form className='flex flex-col gap-4 mt-6' onSubmit={handleCaptainLogin}>
                <h2 className='text-xl font-bold'>What's your email?</h2>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-medium' htmlFor="email">Email</label>
                    <input
                        className='bg-gray-100 px-4 py-2 rounded-md'
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
                        className='bg-gray-100 px-4 py-2 rounded-md'
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

                <Link to={'/captain-sign-up'}><p className='text-sm text-center'>Join as a <span className='font-bold text-black'>Captain</span>? <span className='font-bold text-black'>Register here</span></p></Link>
            </form>
        </div>

        <div>
            <Link to={'/login'} className='flex items-center justify-center w-full bg-blue-600 text-white font-medium py-2 rounded' type='submit'>Sign-in as User</Link>
        </div>


    </div>
    );
};

export default CaptainLogin;
