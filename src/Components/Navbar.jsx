import React from 'react'
import logo from "../assets/logo.jpg"
import img1 from "../assets/img1.png"

const Navbar = () => {
    return (
        <div class="flex w-[90%]">
            <div class="w-[150px] h-[100px] absolute">
                <img src={img1} alt="" />
            </div>
            <div id='navbar' class="flex justify-between shadow-2xl items-center bg-main-100 px-3 py-3 rounded-2xl w-[1360px] mt-[30px] z-50">
                <div class='w-[30%] flex'>
                    <div>
                        {/* -------------- logo -----------------*/}
                        <img src={logo} alt="" width={'30px'} class="rounded-full" />
                    </div>
                    <div class="flex flex-col mx-[10px] text-[13px] font-bold text-white">
                        <span>BITVERSE <br /> FINANCE</span>
                    </div>
                </div>
                {/* -------------- 2ND CONTAINER --------- */}
                <div class="flex justify-between w-[60%] text-white item-center">
                    <div>About</div>
                    <div>Token Utility</div>
                    <div>Roadmap</div>
                    <div class="shadow-xl"><button class="text-black bg-main-yellow rounded-md px-2">Connect Wallet</button></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar