import React, { useEffect, useState } from 'react'
import Cards2 from '../../components/Cards2';
//import Pres from '../../components/Pres';

const Jewelry = () => {
   const [products, setProducts] = useState([]);
   const [filteredItems, setFilteredItems] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState("all");
   const [sortOption, setSortOption] = useState("default")
  useEffect(() => {
    const fetchData = async () => {
      try{
   const response = await fetch("/jewelry.json");
   const data = await response.json();
console.log(data)
   setProducts(data)
   setFilteredItems(data)
      } catch (error){
        console.log("Error fetching data:", error)
      }
    }
    fetchData();
  }, [])

  const filterItems = (category) => {
    const filtered = category === "all" ? (products) : products.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
  }

  const showAll = () => {
    setFilteredItems(products);
    selectedCategory("all");
   }

   // sorting function

   


  return (
    <div className='mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4'>

      

      <div className="p-4">
        <h1 className="title ">
          Jewelry & accessories
        </h1>
        <div className="mt-8 flex flex-col md:flex-row items-center gap-8 justify-center">
            <p className="font-semibold uppercase md: text-center bg-black text-white md:p-1.5 p-1 rounded-sm
    inline-flex items-center ">The perfect blend of your jewelries and accessories</p>
            </div>
      </div> 

      

      <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 px-10 flex-wrap text-2xl font-semibold '>
            <button onClick={showAll}>All products</button>
            <button onClick={() => filterItems("Ring")}>Ring</button>
            <button onClick={() => filterItems("Watch")}>Watch</button>
            <button onClick={() => filterItems("Bag")}>Bag</button>
        </div>
    

      <Cards2 filteredItems={filteredItems}/>
    </div>
  )
}

export default Jewelry
