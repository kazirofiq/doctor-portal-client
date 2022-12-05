import React from 'react';
import appointment from '../../../../assets/images/appointment.png'
import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <section
        style={{
            background: `url(${appointment})`
        }}
        >
            <div className='w-1/3 mx-auto pb-8'>
            <div className='pt-8 text-center'>
                    <h4 className='text-primary font-bold '>Contact Us</h4>
                    <h2 className=' text-3xl text-white'>Stay connected with us</h2>
                </div>
                <form action="">
                
                <input type="text" placeholder="Type here" className="input input-bordered w-full  my-3" />
                <br />
                <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                <br />
                <textarea className="textarea w-full  my-3" placeholder="Bio"></textarea>
                <br />
                <div className='w-1/2 lg:ml-40 mx-auto'>
                <PrimaryButton>Submit</PrimaryButton>
                </div>
                </form>
                
            </div>
        </section>
    );
};

export default ContactUs;