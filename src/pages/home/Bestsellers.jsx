import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Bestsellers = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch("products.json").then(res => res.json()).then(data => setProducts(data))
    }, []);

     const bestSellers = products.filter((item) => item.status === "Best Selers");
     //console.log(bestSellers)
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4'>
      <div className="text-center">
        <h2 className='title'>Best sellers</h2>
        <p className="text-Black/75 capitalize md:w-2/3 mx-auto mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ratione laborum veniam unde voluptas quaerat doloremque quod suscipit itaque saepe eius distinctio, a quasi earum culpa ea assumenda ad impedit.</p>
      </div>


          <div className='mb-16'>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
            bestSellers.map((product) => (
                <SwiperSlide key={product.id}>
                      <Link to={`/shop/${product.id}`}>
      <img src={product.image} alt="unknown" className='mx-auto w-full hover:scale-100 transition-all duration-300'/>
     </Link>
        <div className="mt-4 px-4">
          <h4 className='text-base font-semibold mb-2'>{product.title}</h4>
        
        <div className='flex justify-between'>
          <p className='text-black/50'>{product.category}</p>
          <p className='font-semibold'>${product.price}</p>
          
        </div>
      </div>
                </SwiperSlide>
            ))
        }
        
        
      </Swiper>
          </div>
    </div>
  )
}

export default Bestsellers
