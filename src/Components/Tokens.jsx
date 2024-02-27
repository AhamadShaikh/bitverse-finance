import React, { useEffect, useState } from 'react'
import TokenCard from './TokenCard'

const Tokens = () => {

  const [tokensData, setTokensData] = useState([])
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(0)

  const getTokens = async () => {
    try {
      let res = await fetch(`https://bitverse-finance.onrender.com/api/tokens?page=${page}&limit=6`)
      let data = await res.json()
      setTokensData(data.data)
      let last = Math.ceil(tokensData.length / 2)
      setLastPage(last)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(tokensData);


  const handlePrevButton = (e) => {
    setPage((prev) => prev - 1)
  }

  const handleNextButton = (e) => {
    setPage((prev) => prev + 1)
  }


  useEffect(() => {
    getTokens()
  }, [page])

  return (
    <div className='flex flex-col gap-[20px] m-[50px]'>
      <div>
        <div className='text-4xl flex justify-center m-[20px]'>
          Our <span className='text-main-yellow'>Tokens</span>
        </div>
        <div className='flex justify-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci hic nobis ducimus magnam placeat aperiam error. Laborum, culpa.
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {
          tokensData.map((ele, ind) => (
            <TokenCard key={ind} {...ele} />
          ))
        }
      </div>
      <div className='flex w-full justify-evenly'>
        <div class="shadow-xl"><button class="text-black bg-white rounded-md px-2 w-[100px]" onClick={handlePrevButton} disabled={page === 1}>Previous</button></div>
        <span>Page {page} of 2</span>
        <div class="shadow-xl"><button class="text-black bg-white rounded-md px-2 w-[100px]" onClick={handleNextButton} disabled={page === 2}>next</button></div>
      </div>

    </div>
  )
}

export default Tokens