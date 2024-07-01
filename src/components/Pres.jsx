import React from 'react'
import { Link } from 'react-router-dom'


const Pres = ({filteredItems}) => {
  return (
    <div>
      {
    filteredItems.map((item) =>(
      <div key={item.id}>
     <Link to={`/jewelry/${item.id}`}>
      <img src={image} alt="" />
     </Link>
        <div className="mt-4 px-4">
          <h4 className='text-base font-semibold mb-2'>{item.title}</h4>
        </div>

        <div>
          <p className='text-black/50'>{item.category}</p>
          <p className='font-semibold'>${item.price}</p>

        </div>
      </div>
    ))
      }
    </div>
  )
}

export default Pres
