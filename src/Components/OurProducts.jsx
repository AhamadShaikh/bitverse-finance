import React from 'react'
import img1 from "../assets/product-img1.png"
import img2 from "../assets/product-img2.png"
import img3 from "../assets/product-img3.png"
import img4 from "../assets/product-img4.png"
import img5 from "../assets/product-img5.png"
import OurProductsCard from './OurProductsCard'

const OurProducts = () => {

    let productsArr = [
        {
            image: img1,
            name: 'Bita Marketplace',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci hic nobis ducimus magnam placeat aperiam error. Laborum, culpa.'
        },
        {
            image: img2,
            name: 'Bitadex',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci hic nobis ducimus magnam placeat aperiam error. Laborum, culpa.'
        },
        {
            image: img3,
            name: 'Bitabriidge',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci hic nobis ducimus magnam placeat aperiam error. Laborum, culpa.'
        },
        {
            image: img4,
            name: 'Bitapad',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci hic nobis ducimus magnam placeat aperiam error. Laborum, culpa.'
        },
        {
            image: img5,
            name: 'BitaLend',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci hic nobis ducimus magnam placeat aperiam error. Laborum, culpa.'
        },
    ]
    return (
        <div className='mt-[50px]'>
            <div>
                <div className='text-4xl flex justify-center'>
                    Our <span className='text-main-yellow'>Products</span>
                </div>
                <div className='flex justify-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci hic nobis ducimus magnam placeat aperiam error. Laborum, culpa.
                </div>
            </div>

            <div className='grid grid-cols-3 gap-4' data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">
                {
                    productsArr.map((ele, ind) => {
                        return <OurProductsCard key={ind} {...ele} />
                    })
                }
            </div>
        </div>
    )
}

export default OurProducts