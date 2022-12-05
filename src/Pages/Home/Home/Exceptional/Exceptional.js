import React from 'react';
import treatment from '../../../../assets/images/treatment.png'
import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';

const Exceptional = () => {
    return (
        <div className="card grid px-16 md:grid-cols-2 mt-32 md:card-side bg-base-100 shadow-xl">
            <div>
            <figure><img className='md:w-1/2' src={treatment} alt="Movie"/></figure>
            </div>
            <div className=" md:mt-24">
                <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions justify-start">
                <PrimaryButton>Get started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;