import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCaptainContext } from '../context/CaptainContext';

const CaptainSignup = () => {

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const navigate = useNavigate();

  const { captain, setCaptain } = useCaptainContext();

  const [firstname, setFirstName] = React.useState<string>('');
  const [lastname, setLastName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const [vehicleColor, setVehicleColor] = React.useState('');
  const [vehiclePlate, setVehiclePlate] = React.useState('');
  const [vehicleCapacity, setVehicleCapacity] = React.useState('');
  const [vehicleType, setVehicleType] = React.useState('');


  const handleCaptainSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCaptain = {
      fullname: {
        firstname,
        lastname
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType
      },
    };

    const response = await axios.post(`${baseUrl}/captain/create`, newCaptain);
    console.log('response: ', response);
    if (response.status === 201) {
      const data = response.data;
      setCaptain(data?.result);
      localStorage.setItem('token', data?.result.token);
      navigate('/home');
    };

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  };

  return (
    <div className='p-6 h-screen flex flex-col'>

      <img className='w-16' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="logo" />
      <div>

        <form className='flex flex-col gap-3 mt-2' onSubmit={handleCaptainSignup}>
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

          <h4 className='text-lg font-bold'>Vehicle Details</h4>

          <div className='w-1/2 flex items-center justify-between gap-3'>

            <div className='flex flex-col gap-1'>
              <input
                className='bg-gray-100 px-4 py-2 rounded-md w-[160px] placeholder:text-sm'
                type="text"
                name="vehicleColor"
                id="vehicleColor"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                placeholder='Vehicle Color'
                required
              />
            </div>

            <div className='flex flex-col gap-1'>
              <input
                className='bg-gray-100 px-4 py-2 rounded-md w-[160px] placeholder:text-sm'
                type="text"
                name="vehiclePlate"
                id="vehiclePlate"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                placeholder='Vehicle Plate'
                required
              />
            </div>


          </div>

          <div className='w-1/2 flex items-center justify-between gap-3'>

            <div className='flex flex-col gap-1'>
              <input
                className='bg-gray-100 px-4 py-2 rounded-md w-[160px] placeholder:text-sm'
                type="number"
                name="vehicleCapacity"
                id="vehicleCapacity"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                placeholder='Vehicle Capacity'
                required
              />
            </div>

            <div className='flex flex-col gap-1'>
              <select
                required
                className='bg-gray-100 px-4 py-2 rounded-md h-[40px] w-[160px] placeholder:text-sm text-sm'
                value={vehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value)
                }}
              >
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">car</option>
                <option value="auto">auto</option>
                <option value="moto">motorcycle</option>
              </select>
            </div>


          </div>

          <button className='w-full mt-2 bg-black text-white font-medium py-2 rounded' type='submit'>Create Captain</button>

          <Link to={'/captain-login'}><p className='text-sm text-center'>Already have an account? <span className='font-bold text-black'>Login here</span></p></Link>
        </form>
      </div>

      {/* <div>
        <Link to={'/captain-login'} className='flex items-center justify-center w-full bg-green-600 text-white font-medium py-2 rounded' type='submit'>Login as a Captain</Link>
    </div> */}

      <div className='mt-5'>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>

    </div>
  );
};

export default CaptainSignup;
