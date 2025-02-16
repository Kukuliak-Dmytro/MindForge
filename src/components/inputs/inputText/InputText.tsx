import './InputText.css'
interface InputTextProps {
    id: string;
    title:string;
    placeholder:string;
    defaultValue?:string;
    type?:"text" | "email" | "password"|"tel";
    onChange?: (event: any) => void;
}
export default function InputText({id,title,placeholder,defaultValue,type="text",onChange}: InputTextProps) {
    return <div className="inputTextWrapper">
        <label htmlFor={id}>{title}</label>
        <input type={type} id={id}  placeholder={placeholder} defaultValue={defaultValue} onChange={onChange} />
    </div>
}