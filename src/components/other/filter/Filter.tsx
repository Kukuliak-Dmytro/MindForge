import './filter.css';
interface filterProps{
    title:string;
    // later replace with id's
    filters:string[];

}
import inputCheckbox from '../../inputs/inputCheckbox/InputCheckbox.tsx';
export default function Filter({title,filters}:filterProps) {
    return (
        <div className="filterWrapper">
           <h4>{title}</h4>
            <div className="filtersFrame">
                {filters.map((filter,index)=>{
                    return inputCheckbox(filter,index)
                })}
            </div>
            
        </div>
    )
}
