import React from 'react'
import image1 from '../../assests/images/image1.jpg'
import image2 from '../../assests/images/image2.png'
import image3 from '../../assests/images/image3.png'
import image4 from '../../assests/images/image4.png'
import image5 from '../../assests/images/image5.png'
import { Link } from 'react-router-dom'
import img1 from '../../../src/assests/images/brand1.png'
import img2 from '../../../src/assests/images/brand2.png'
import img3 from '../../../src/assests/images/brand3.png'
import img4 from '../../../src/assests/images/brand4.png'
import img5 from '../../../src/assests/images/brand5.png'

// const companyLogo = [
    
//         {id: 1, img: "assests/images/brand1.png"},
//         {id: 2, img: "assests/images/brand2.png"},
//         {id: 3, img: "assests/images/brand3.png"},
//         {id: 4, img: "assests/images/brand4.png"},
//         {id: 5, img: "assests/images/brand5.png"},
    
// ]

const Category = () => {
  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
      <div className='flex items-center justify-around flex-wrap gap-4 py-5'>
        {/* {
            companyLogo.map(({id, img}) => (
                <div key={id}><img src={img} alt="" /></div>
            ))
        } */}

<img src={img1} alt="" />
<img src={img2} alt="" />
<img src={img3} alt="" />
<img src={img4} alt="" />
 <img src={img5} alt="" />
      </div>
<div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
    <p className='font-semibold uppercase md:-rotate-90 text-center bg-black text-white md:p-1.5 p-2 rounded-sm
    inline-flex'>Explore new and popular styles</p>
    <div>
        <Link to="/"><img src={image1} alt="" className='w-96 hover:scale-105 transition-all duration-200'/></Link>
    </div>

    <div className="md:w-1/2">
        <div className='grid grid-cols-2 gap-2'>
        <Link to="/"><img src={image2} alt="" className='w-96 hover:scale-105 transition-all duration-200'/></Link>
        <Link to="/"><img src={image3} alt="" className='w-96 hover:scale-105 transition-all duration-200'/></Link>
        <Link to="/"><img src={image4} alt="" className='w-96 hover:scale-105 transition-all duration-200'/></Link>
        <Link to="/"><img src={image5} alt="" className='w-96 hover:scale-105 transition-all duration-200'/></Link>
        </div>
    </div>
</div>

    </div>
  )
}

export default Category
