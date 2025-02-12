import { ReactNode } from "react";
import "./BestEmployeeCard.css";
interface props{
    children:ReactNode;
    name:string;
    workingSince:string;
    rating:string;
    description:string;
}

export default function BestEmployeeCard({children,name,workingSince,rating,description}:props){
return (
    <div className="bestEmployeeCard">
            {children}
            <div className="mainInfo">
                <h5>{name}</h5>
                <p className="p2"> На сайті з {workingSince}</p>
                <h6>{rating}</h6>
            </div>
            {description}
    </div>
)
}