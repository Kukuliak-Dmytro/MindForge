import { ReactNode } from 'react';
import './EmployeeCard.css';
import { PrimaryButton, SecondaryButton } from '../../buttons/Button.tsx';
interface employeeCardProps {
    name: string;
    rating: string;
    avatar: ReactNode;
    education: string;
    description: string;
    worksSince: string;

}
export function EmployeeCard({ ...employee }: employeeCardProps) {
    return (
        <div className="employeeCardWrapper">

            <div className="employeeMainInfo">
                {employee.avatar}
                <div className="separator">

                    <span>
                        <h4 className="employeeName">{employee.name}</h4>
                        <h3 className="employeeRating">{employee.rating}</h3>
                    </span>
                    <span>
                        <p className="employeeWorksSince p2">{employee.worksSince}</p>
                        <div className="buttonsWrapper">
                            <PrimaryButton >Замовити послугу</PrimaryButton>
                            <SecondaryButton icon={true}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" fill="#0B0702" />
                            </svg>
                            </SecondaryButton>
                        </div>
                    </span>
                </div>
            </div>


            <p className="employeeEducation">{employee.education}</p>
            <p className="employeeDescription">{employee.description}</p>



        </div>
    )
}