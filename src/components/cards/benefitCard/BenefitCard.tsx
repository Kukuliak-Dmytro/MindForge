import React from 'react';
import './BenefitCard.css';
interface BenefitCardProps {
    title: string;
    imgSrc: string;
    color: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, imgSrc, color }) => {
    return (
        <div className={`benefit ${color}`}>
            <h2>{title}</h2>
            <img src={imgSrc} alt={title} />
        </div>
    );
};

export default BenefitCard;