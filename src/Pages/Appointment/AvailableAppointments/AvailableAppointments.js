import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AvailableAppointment from './AvailableAppointment';
import BookingModal from '../Appointment/BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const {data:appointmentOptions = [], refetch, isLoading} = useQuery({
        
        queryKey: ['appointmentOptions', date],
         queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
      }
        
    });

    if(isLoading){
        return <Loading></Loading>
    }

    

    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold '>Available Appointments {format(selectedDate, 'PP')}.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8'>
                {
                    
                    appointmentOptions.map(appointmentOption => <AvailableAppointment
                    key={appointmentOption._id}
                    appointmentOption={appointmentOption}
                    setTreatment={setTreatment}
                    ></AvailableAppointment>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;