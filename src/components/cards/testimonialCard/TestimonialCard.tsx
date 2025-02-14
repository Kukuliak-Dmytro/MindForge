import { ReactNode } from 'react';
import './TestimonialCard.css';

interface TestimonialCardProps {
    name:string;
    rating:string;
    subject:string;
    description:string;
    author:string;
    // avatar
    children:ReactNode
}
export default function TestimonialCard({name, rating, subject, description, author,children}:TestimonialCardProps) {

    return <div className="testimonialCardWrapper">
        <div className="mainInfo">
            <div className="avatar">{children}</div>
            <div className="nameAndRating"><h5>{name}</h5><p>{rating}</p></div>
        </div>
        <div className="subject"><h5>{subject}</h5></div>
        <div className="description"><p>{description}</p></div>
        <div className="author"><p className="p2">{author}</p></div>

    </div>

}