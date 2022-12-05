import React from 'react';

const Review = ({review}) => {
    const {img, location, review: userReview, name} = review;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{userReview}</h2>

                <div className="flex items-center mt-6">
                <div className="avatar mr-6">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
                
                
                <div className="">
                <p>{location}</p>
                <p>{name}</p>
                </div>
            </div>
                

            </div>
        </div>
    );
};

export default Review;