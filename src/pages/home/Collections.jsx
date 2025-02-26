import React from 'react'
import img1 from '../../assests/images/zara-logo.png'

const Collections = () => {
  return (
    <div className='bg-[url("assests/images/collection-bg.png")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20'>
       <div className="h-[580px] flex justify-between  md:flex-row items-center">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
            <img src={img1} alt="" />
            <p className='text-lg text-white capitalize my-8 md:2/3 leading-[32px]'>
                Lustrous yet understated. The new evening wear Collections
                exclusive offered at the reopened Giorgio Armani boutique in los
                Angeles.
            </p>
            <button className='px-6 py-2 bg-white text-black rounded-sm font-semibold'>See Collections </button>
        </div>
       </div>
    </div>
  )
}

export default Collections
