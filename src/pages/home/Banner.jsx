import React from 'react'
import bannerimg from '../../../src/assests/images/anthony-le-c3gpaoFiv6s-unsplash.jpg'
import { FaShoppingBag } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='bg-gray-300 py-12 xl:px-28 px-4'>
        <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
        <div className="md:w-1/2 ">
        <img src={bannerimg} alt="" className='rounded-tl-[9rem] rounded-br-[8rem] w-96'/>
      </div>
        <div className="md:w-1/2">
     <h1 className='text-5xl font-light mb-5'>Collections</h1>
        <p className="text-xl mb-7">you can explore any shop many different collections 
        from various brands here</p>
        <button className='bg-Black hover:bg-red-900 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2'>
          <FaShoppingBag className='inline-flex' />  Shop now
        </button>
        </div>
     
      </div>
    </div>
  )
}

export default Banner
