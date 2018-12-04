import React from 'react'
import './about.css';
import DemoAccount from './demo-account';

export default function About(props){
    return(
        <div className='about-container'>
            <p className='about-content'>Scottish Gaelic is a language learning app designed to improve your abilty to learn the beautiful Scottish language of Gaelic.  Using our specialized algorithm we will teach you words and phrases that will build your language skills and based on your abilities you will progress quickly and with a stronger grasp of Gaelic!</p>
            <DemoAccount />
        </div>
    )
}