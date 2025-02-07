import { ReactNode } from 'react';
import './SubjectCard.css';
interface SubjectCardProps {
    children:string;
    icon:ReactNode;
    variant?:'Default' | 'Inverse';
}
export default function SubjectCard({children,icon,variant='Default'}:SubjectCardProps){
    return (
        <div className="cardWrapper" style={{flexDirection: `${variant==='Inverse' ? 'row-reverse' : 'row'}`}}>
            <div>
                {icon}
            </div>
            <div className="cardContent">
                <p>{children}</p>
            </div>
        </div>
    )
}