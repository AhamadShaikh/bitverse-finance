import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import logo from "../assets/logo.jpg"

const About = () => {
    return (
        <div>
            <div className='flex justify-around m-10 border border-yellow-500 w-[914px] p-4 rounded-md'>
                <div className='text-4xl text-center'>
                    Join Our <br /><span className='text-yellow-500'>Community</span>
                </div>
                <div className='flex justify-center mt-4'>
                    <div className='mx-2 flex items-center justify-center rounded-full text-center border bg-yellow-500 w-[40px] h-[40px]'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className='mx-2 flex items-center justify-center rounded-full text-center border bg-yellow-500 w-[40px] h-[40px]'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className='mx-2 flex items-center justify-center rounded-full text-center border bg-yellow-500 w-[40px] h-[40px]'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center m-[20px]'>
                <img src={logo} alt="" width={'100px'} />
                <span>All rights reserved</span>
            </div>
        </div>
    );
}

export default About;
