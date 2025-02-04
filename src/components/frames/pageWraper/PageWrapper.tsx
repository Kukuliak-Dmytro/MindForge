//a wrapper around the entire page; contains all the sections here; no gap here - the sections will have them
import React from 'react'
import './PageWrapper.scss'
export default function PageWrapper({children}: {children: React.ReactNode}){
    return(
        <div className='pageWrapper'>
            {children}
        </div>
    )
}