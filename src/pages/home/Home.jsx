import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Collections from './Collections'
import Bestsellers from './Bestsellers'
import Newletters from './Newletters'



const Home = () => {
  return (
    <div>
      <Banner />
      <Category/>
      <Products/>
      <Collections/>
      <Bestsellers/>
      <Newletters/>
    </div>
  )
}

export default Home
