import './inputCheckbox.css';
import { useRef } from 'react';
export default function InputCheckbox(title:string, key:number) {
    const checkboxRef = useRef<HTMLInputElement>(null);
    return (
       <div key={key} className="inputCheckboxWrapper" onClick={() => { if (checkboxRef.current) checkboxRef.current.checked = !checkboxRef.current.checked; }} >
            <input type="checkbox" name="subject" className='checkbox' id={`${key}`} title={title} ref={checkboxRef}/>
            <div className={`newCheckbox ${key}`}></div>
            <label htmlFor="subject"><p>{title}</p></label>
       </div>
    )
}