import React from 'react'
import bitcoin from "../assets/bitcoin-img.png"

const TokenCard = ({ img, symbol, tokenName, decimals, marketcap, chain }) => {
    return (
        <div className='flex flex-col justify-center text-left w-[300px] h-[398px] items-center border border-main-yellow rounded-[10px] gap-y-[10px]'>
            <img src={bitcoin} alt="" width={'100px'} />
            <h2 className='text-2xl border-b-2 w-[200px]'>Bitcoin</h2>
            <div className='flex gap-[20px] '>
                <p>Symbol</p>
                <p>{symbol}</p>
            </div>
            <div className='flex gap-[20px]'>
                <p>Decimals</p>
                <p>{decimals}</p>
            </div>
            <div className='flex gap-[20px]'>
                <p>Market Cap</p>
                <p>{marketcap}</p>
            </div>
            <div className='flex gap-[20px]'>
                <p >Chain</p>
                <p>{chain}</p>
            </div>
            <div>
            <div class="shadow-xl"><button class="text-black bg-main-yellow rounded-md px-2">Details</button></div>
            </div>
        </div>
    )
}

// img: { type: String, required: true },
//     tokenName:{ type: String, required: true },
//     symbol: { type: String, required: true },
//     decimals: { type: Number, required: true },
//     marketcap: { type: Number, required: true },
//     chain: { type: String, required: true }

export default TokenCard