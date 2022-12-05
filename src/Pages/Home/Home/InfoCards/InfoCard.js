import React from 'react';

const InfoCard = ({card}) => {
    const {id, name, icon, description, bgClass } = card;
    return (
        <div>
            <div className={`card text-white p-6 md:card-side  shadow-xl ${bgClass}`}>
                <figure><img src={icon} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
                </div>
        </div>
    );
};

export default InfoCard;