
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import background from '../../../assets/images/bg.png'

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <header className='my-6'>
            <div className="hero"
            style={{
                background: `url(${background})`,
                backgroundSize: 'cover'
            }}
            >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='dentist chair' className="lg:w-1/2  w-full rounded-lg shadow-2xl" />
                    <div className='md:mr-8 mt-8 md:mt-0 p-6 md:max-w-sm rounded-lg shadow-2xl'>
                        <DayPicker
                         mode="single"
                         selected={selectedDate}
                         onSelect={setSelectedDate}
                        //  footer={footer}
                        />
                        
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;