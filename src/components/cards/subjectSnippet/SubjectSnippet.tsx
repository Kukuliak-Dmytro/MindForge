import { ReactNode } from 'react';
import './SubjectSnippet.css';
interface SubjectSnippetProps {
    title:string;
    children:ReactNode;
    variant?:'Default' | 'Inverse';
}
export default function SubjectSnippet({children,title,variant='Default'}:SubjectSnippetProps){
    return (
        <div className="subjectSnippetWrapper" style={{flexDirection: `${variant==='Inverse' ? 'row-reverse' : 'row'}`}}>
            <div>
                {children}
            </div>
            <div className="subjectSnippetContent">
                <p>{title}</p>
            </div>
        </div>
    )
}