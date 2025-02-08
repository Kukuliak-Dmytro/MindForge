import './SubjectCard.css'
import { SecondaryButton } from '../../buttons/Button';

interface SubjectCardProps {
    children: React.ReactNode;
    title:string;
    link:string;
}

export default function SubjectCard({ children, title, link }: SubjectCardProps) {
    return (
        <div className="subjectCardWrapper">
                {children}
                <h4>{title}</h4>
                <SecondaryButton link={link}>Перейти</SecondaryButton>
            
        </div>
    )
}