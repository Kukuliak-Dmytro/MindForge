import './Button.css'
import React from 'react';
interface buttonProps {
    // for icon buttons
    children: string | React.ReactNode;
    large?: boolean;
    icon?: boolean;
    width?: number;
    link?: string;
    onClick?: () => void;
}


export function PrimaryButton({ children, large, width, icon, link,onClick}: buttonProps) {
    if(link){
        return <a href={link} className={`primaryBtn ${icon ? 'icon' : ''} ${large ? 'large' : ''}`} style={{ width }}>{children}</a>
    }else
    return <button onClick={onClick} className={`primaryBtn ${icon ? 'icon' : ''} ${large ? 'large' : ''}`} style={{ width }}>{children}</button>
}

export function SecondaryButton({ children, large, width, icon, link,onClick}: buttonProps) {
    if(link){
        return <a href={link} className={`secondaryBtn ${icon ? 'icon' : ''} ${large ? 'large' : ''}`} style={{ width }}>{children}</a>
    }else
    return <button onClick={onClick} className={`secondaryBtn ${icon ? 'icon' : ''} ${large ? 'large' : ''}`} style={{ width }}>{children}</button>

}

export function DangerButton({ children, large, width, icon, link,onClick}: buttonProps) {
    if(link){
        return <a href={link} className={`dangerBtn ${icon ? 'icon' : ''} ${large ? 'large' : ''}`} style={{ width }}>{children}</a>
    }else
    return <button onClick={onClick} className={`dangerBtn ${icon ? 'icon' : ''} ${large ? 'large' : ''}`} style={{ width }}>{children}</button>

}

