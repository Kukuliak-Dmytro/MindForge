//a wrapper around the entire page; contains all the sections here; no gap here - the sections will have them
import React from 'react'
import './PageWrapper.css'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../../state/store';
import { setTheme } from '../../../state/settingsSlice';
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
export default function PageWrapper({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch<AppDispatch>();
    const theme = useSelector((state: RootState) => state.settingsStore.currentTheme);
    return (
        <div className='pageWrapper'>
            {children}
            <div className={`themeToggle ${theme}`} onClick={() => { dispatch(setTheme(`${theme == "dark" ? "light" : "dark"}`)) }}>
                <div className="toggleWrapper">
                    <IoSunnyOutline></IoSunnyOutline>
                    <IoMoonOutline ></IoMoonOutline>
                    <div className={`ball ${theme}`}></div>
                </div>
            </div>

        </div>
    )
}