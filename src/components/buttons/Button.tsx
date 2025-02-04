import './Button.scss'
import React from 'react';
interface buttonProps {
    // for icon buttons
    children: string | React.ReactNode;
    large?: boolean;
}

interface buttonProps {
    // for icon buttons
    children: string | React.ReactNode;
    large?: boolean;
    width?: number;
}

export function PrimaryButton({children, large, width}: buttonProps) {
    return <button className={`primaryBtn ${large ? 'large' : ''}`} style={{ width }}>{children}</button>
}

export function SecondaryButton({children, large, width}: buttonProps) {
    return <button className={`secondaryBtn ${large ? 'large' : ''}`} style={{ width }}>{children}</button>
}

export function DangerButton({children, large, width}: buttonProps) {
    return <button className={`dangerBtn ${large ? 'large' : ''}`} style={{ width }}>{children}</button>
}

