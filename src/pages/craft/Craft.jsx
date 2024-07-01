import React, {useEffect, useState} from 'react'
import Cards6 from '../../components/Cards6';


const Craft = () => {

  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default")
 useEffect(() => {
   const fetchData = async () => {
     try{
  const response = await fetch("/craft.json");
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

  return (
    <div className='mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4'>
      <div className="">
        <h1 className='title'>Craft & Tools</h1>
      </div>

      <Cards6 filteredItems={filteredItems}/>
    </div>
  )
}

export default Craft
