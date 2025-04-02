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

        </div>
    );
};

export default Home;