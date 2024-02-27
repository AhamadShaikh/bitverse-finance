import React from 'react';
import Navbar from '../Components/Navbar';
import bank from "../assets/bank.png";
import OurProducts from '../Components/OurProducts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Roadmap from '../Components/Roadmap';
import Tokens from '../Components/Tokens';
import About from '../Components/About';

const LandingPage = () => {
    React.useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="font-sans flex flex-col justify-center items-center text-white">
            <div className='flex justify-center'>
                <Navbar />
            </div>
            <div className='text-center'>
                <div className="text-center text-white mt-[100px] text-[100px]">
                    <div className="" data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        YOUR GATEWAY
                    </div>
                    <div className="flex items-center justify-center mt-5">
                        <span className="mr-2" data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-center">TO</span>
                        <img src={bank} alt="" width={'324px'} data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-center" />
                    </div>
                    <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        DEFI ON <span className="text-main-yellow">BITCOIN</span>
                    </div>
                </div>
                <div className="text-center text-white mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eius suscipit, repellendus tempore, repudiandae
                </div>
                <div className='flex justify-center m-[20px]'>
                    <button className="bg-main-yellow px-2 py-1 rounded-full">Get Started <span className='text-black'>{">"}</span></button>
                </div>
            </div>
            <div>
                <OurProducts />
            </div>
            <div>
                <Roadmap />
            </div>
            <div>
                <Tokens />
            </div>
            <div>
                <About />
            </div>
        </div>
    );
};

export default LandingPage;
