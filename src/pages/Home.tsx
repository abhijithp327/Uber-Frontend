import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';




const Home = () => {

    const [pickup, setPickup] = React.useState<string>('');
    const [destination, setDestination] = React.useState<string>('');
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [hideArrow, setHideArrow] = React.useState<boolean>(true);

    const panelRef = React.useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (isOpen) {
            setHideArrow(false);
            gsap.to(panelRef.current, {
                height: '70%',
                display: 'block', // Ensure it's visible
                duration: 0.5,
            });
        } else {
            setHideArrow(true);
            gsap.to(panelRef.current, {
                height: '0%',
                display: 'none', // Hide it completely
                duration: 0.5,
            });
        }
    }, [isOpen]);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };


    return (
        <div className='h-screen relative'>
            <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />

            <div className='h-screen w-screen'>
                <img className='h-full w-full object-cover' src="https://img.sfist.com/assets_c/2015/07/ubermapvisuals-thumb-640xauto-905052.png" alt="" />
            </div>

            <div className='flex flex-col justify-end absolute h-screen top-0 w-full'>
                <div className='h-[30%] p-5 bg-white flex flex-col gap-3 relative'>
                    <div className='flex items-center justify-between'>
                        <h4 className='text-xl font-bold'>Find a trip</h4>
                        <div className={`bg-[#eee] w-7 h-7 rounded-full flex items-center justify-center ${hideArrow ? 'hidden' : ''}`} onClick={() => setIsOpen(false)}>
                            <i className="text-xl ri-arrow-down-wide-line"></i>
                        </div>
                    </div>
                    <form className='relative flex flex-col gap-4' onSubmit={handleSubmit}>
                        <div className='line absolute bottom-2 left-4 h-20 w-1  bg-gray-800 rounded-full'></div>
                        <input
                            onClick={() => setIsOpen(true)}
                            className='bg-[#eee] py-2 px-12 rounded-lg text-base'
                            type="text"
                            placeholder='Add a pickup location'
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}
                        />
                        <input
                            onClick={() => setIsOpen(true)}
                            className='bg-[#eee] py-2 px-12 rounded-lg text-base'
                            type="text"
                            placeholder='Enter a destination'
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </form>
                </div>
                <div ref={panelRef} className='h-[70%] p-5 bg-white'>
                    <LocationSearchPanel />
                </div>
            </div>

            <div className='fixed w-full z-10 bottom-0 translate-y-full p-5 bg-white flex flex-col gap-4'>

                <div className='bg-white border flex items-center justify-between p-2 w-full rounded-lg hover:border-black hover:cursor-pointer hover:border-2'>

                    <img className='h-14' src="https://swyft.pl/wp-content/uploads/2023/05/can-1-person-use-uberx.jpg" alt="car" />

                    <div className='flex flex-col flex-grow ml-5'>

                        {/* UberGo, User Count & Price in Same Row */}
                        <div className='flex items-center justify-between w-full'>
                            <div className='flex items-center gap-2'>
                                <h4 className='text-sm font-medium'>UberGo</h4>
                                <div className='flex items-center gap-1'>
                                    <i className='ri-user-3-fill text-base'></i>
                                    <span className='text-sm'>4</span>
                                </div>
                            </div>

                            {/* Price moved inside this row */}
                            <h2 className='text-base font-medium'>₹150.30</h2>
                        </div>

                        <h5 className='text-sm font-medium'>2 mins away</h5>
                        <p className='text-xs font-normal text-gray-700'>Affordable, compact rides</p>

                    </div>

                </div>

                <div className='bg-white border flex items-center justify-between p-2 w-full rounded-lg hover:border-black hover:cursor-pointer hover:border-2'>

                    <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="car" />

                    <div className='flex flex-col flex-grow ml-5'>

                        {/* UberGo, User Count & Price in Same Row */}
                        <div className='flex items-center justify-between w-full'>
                            <div className='flex items-center gap-2'>
                                <h4 className='text-sm font-medium'>Moto</h4>
                                <div className='flex items-center gap-1'>
                                    <i className='ri-user-3-fill text-base'></i>
                                    <span className='text-sm'>1</span>
                                </div>
                            </div>

                            {/* Price moved inside this row */}
                            <h2 className='text-base font-medium'>₹65.17</h2>
                        </div>

                        <h5 className='text-sm font-medium'>3 mins away</h5>
                        <p className='text-xs font-normal text-gray-700'>Affordable, motorcyle rides</p>

                    </div>

                </div>

                <div className='bg-white border flex items-center justify-between p-2 w-full rounded-lg hover:border-black hover:cursor-pointer hover:border-2'>

                    <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png" alt="car" />

                    <div className='flex flex-col flex-grow ml-5'>

                        {/* UberGo, User Count & Price in Same Row */}
                        <div className='flex items-center justify-between w-full'>
                            <div className='flex items-center gap-2'>
                                <h4 className='text-sm font-medium'>Premier</h4>
                                <div className='flex items-center gap-1'>
                                    <i className='ri-user-3-fill text-base'></i>
                                    <span className='text-sm'>5</span>
                                </div>
                            </div>

                            {/* Price moved inside this row */}
                            <h2 className='text-base font-medium'>₹700.17</h2>
                        </div>

                        <h5 className='text-sm font-medium'>5 mins away</h5>
                        <p className='text-xs font-normal text-gray-700'>Quality drivers</p>

                    </div>

                </div>

                <div className='bg-white border flex items-center justify-between p-2 w-full rounded-lg hover:border-black hover:cursor-pointer hover:border-2'>

                    <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="car" />

                    <div className='flex flex-col flex-grow ml-5'>

                        {/* UberGo, User Count & Price in Same Row */}
                        <div className='flex items-center justify-between w-full'>
                            <div className='flex items-center gap-2'>
                                <h4 className='text-sm font-medium'>Auto</h4>
                                <div className='flex items-center gap-1'>
                                    <i className='ri-user-3-fill text-base'></i>
                                    <span className='text-sm'>3</span>
                                </div>
                            </div>

                            {/* Price moved inside this row */}
                            <h2 className='text-base font-medium'>₹100.17</h2>
                        </div>

                        <h5 className='text-sm font-medium'>5 mins away</h5>
                        <p className='text-xs font-normal text-gray-700'>Quality drivers</p>

                    </div>

                </div>

            </div>


        </div>
    );
};

export default Home;