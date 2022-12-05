import React from 'react';

const AvailableAppointment = ({appointmentOption, setTreatment}) => {
    const { name, price, slots} = appointmentOption;
    return (
        <div>
            <div className="card text-center bg-base-100 shadow-xl p-8 ">
                <div className="card-body">
                    <h2 className=" text-center text-secondary text-2xl font-bold">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'space' : 'space'} Available</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions justify-center">
                    
                    <label
                     disabled={slots.length === 0}
                     htmlFor="booking-modal" 
                     className="btn btn-primary w-2/3 uppercase text-white"
                     onClick={() => setTreatment(appointmentOption)}
                     >Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;