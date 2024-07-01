import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { FaStar, FaArrowAltCircleRight } from 'react-icons/fa';


const PartyProducts = () => {

  const {id} = useParams();
  const [products, setProducts] = useState([])
  console.log(id)

  useEffect(() => {
      const fetchData = async () => {
        try{
     const response = await fetch("/party.json");
     const data = await response.json();
     const product = data.filter((p) => p.id == id);
  console.log(product)
     setProducts(product[0])
        } catch (error){
          console.log("Error fetching data:", error)
        }
      }
      fetchData();
      window.scrollTo({top: 0, behavior: 'smooth'})
    }, [id])

     const {title, category, price, image, status} = products;

  return (
    <div className='mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4'>
        <div className='p-3 max-w-7xl m-auto'>

<div className='mt-5'>
 <a href="/party" className='text-gray-600'>Wedding & party</a>
 <a href="/shop" className="font-bold text-black">/ Shop</a>
</div>

<div className='mt-2 sm:mt-10'>
 <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
     <div>
         <img src={image} alt="unknown" className='w-full'/>
     </div>

      {/* productdetail */}
      <div>
         <h1 className='title'>{title}</h1>
         <p className='mt-3 text-gray-600 text-base leading-6 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, 
             exercitationem maxime voluptatibus eum pariatur reprehenderit sit magnam amet totam, 
             voluptatum quis, iure facilis eos voluptate provident vero. Esse, nemo aliquid!
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Perspiciatis quos deserunt sunt cumque ipsa dolores temporibus numquam distinctio saepe animi architecto mollitia magnam dolorum iusto, 
             nobis, harum minima recusandae doloremque.</p>

               <span className='my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4'>
               <FaStar/>
               <FaStar/>
               <FaStar/>
               <FaStar/>
               <FaStar/>
               </span>

               <p className="text-xl text-red-500 font-semibold sm:text-2xl">${price}</p>

               <div className='mt-3'>
                  <div className='text-left flex flex-col gap-2 w-full'>
                     <label className="font-semibold">Quantity</label>
                     <input type="number" name='price' id='price' defaultValue={1} required className='border border-gray-300 text-sm font-semibold
                     mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 focus:border-red-400' />
                  </div>
                  <div className='w-full text-left my-4'>
                       <button className='flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500
                       text-white font-bold border border-red-500 rounded-sm ease-in-out duration-150 shadow-slate-600
                       hover:bg-white hover:text-red-500 lg:m-0 md:px-6'><span>Confirmed Order</span> <FaArrowAltCircleRight/> </button>
                  </div>
               </div>
      </div>

      
 </div>
</div>

<div className='text-black/75 mt-12'>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, 
   omnis sint voluptas dolores voluptates unde? Doloribus quod reprehenderit maiores nihil earum. Quaerat, nemo.
    Amet, quasi eius voluptas hic culpa voluptates.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, 
   omnis sint voluptas dolores voluptates unde? Doloribus quod reprehenderit maiores nihil earum. Quaerat, nemo.
    Amet, quasi eius voluptas hic culpa voluptates.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, 
   omnis sint voluptas dolores voluptates unde? Doloribus quod reprehenderit maiores nihil earum. Quaerat, nemo.
    Amet, quasi eius voluptas hic culpa voluptates.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, 
   omnis sint voluptas dolores voluptates unde? Doloribus quod reprehenderit maiores nihil earum. Quaerat, nemo.
    Amet, quasi eius voluptas hic culpa voluptates.</p>
</div>
</div>
    </div>
  )
}

export default PartyProducts
