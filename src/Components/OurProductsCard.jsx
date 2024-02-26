import React from 'react'

const OurProductsCard = ({image,name,description}) => {
  return (
    <div className='flex flex-col justify-center text-center w-[314px] h-[398px] items-center border border-main-yellow rounded-[20px] gap-y-[10px]'>
        <img src={image} alt="" width={'100px'} />
        <h2 className='text-2xl border-b-2 w-[200px]'>{name}</h2>
        <p className='text-center'>{description}</p>
    </div>
  )
}

export default OurProductsCard