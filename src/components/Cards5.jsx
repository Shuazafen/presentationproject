import React from 'react'
import { Link } from 'react-router-dom'

const Cards5 = ({filteredItems}) => {
  return (
    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12 shadow-sm'>
        {
        filteredItems.map((item) =>(
            <div key={item.id}>
            <Link to={`/houseshop/${item.id}`}>
             <img src={item.image} alt="unknown" className='mx-auto w-[374px] h-[480px] hover:scale-100 transition-all duration-300 object-cover'/>
            </Link>
               <div className="mt-4 px-4">
                 <h4 className='text-base font-semibold mb-2'>{item.title}</h4>
               
               <div className='flex justify-between'>
                 <p className='text-black/50'>{item.category}</p>
                 <p className='font-semibold'>${item.price}</p>
                 
               </div>
             </div>
             </div>
        ))
           
           
      }
    </div>
  )
}

export default Cards5
