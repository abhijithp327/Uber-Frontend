import React from 'react';

const LocationSearchPanel = (props: any) => {

    console.log('props: ', props);

    const locations = [
        "Nooranad near swathy theatre, sudhi bakery 690504",
        "Nooranad near swathy theatre, sudhi bakery 690504",
        "Nooranad near swathy theatre, sudhi bakery 690504",
        "Nooranad near swathy theatre, sudhi bakery 690501",
    ];

    const handleVehiclePanel = () => {
        props.setVehiclePanelOpen(true);
        props.setIsOpen(false);
    };

    return (
        <div>
            <div className='flex flex-col gap-4'>

                {locations.map((location, index) => (
                    <div key={index} onClick={handleVehiclePanel} className='flex items-center gap-3 border-2 border-gray-50 rounded p-3 active:border-black'>
                        <div className='bg-[#eee] w-8 h-7 flex items-center justify-center rounded-full'>
                            <i className='ri-map-pin-fill text-md text-black'></i>
                        </div>
                        <h4 className='text-sm font-medium'>{location}</h4>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default LocationSearchPanel;
