import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Cards from '../../components/Cards';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default")
  useEffect(() => {
    const fetchData = async () => {
      try{
   const response = await fetch("/products.json");
   const data = await response.json();
//console.log(data)
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
  
  // show all products
   const showAll = () => {
    setFilteredItems(products);
    selectedCategory("all");
   }

   // sorting function

   const handleSortChange = (option) => {
    setSortOption(option);


    // logic for sorting

    let sortedItems = [...filteredItems];
    //console.log(sortedItems)
    switch (option) {
      case "A-Z" : 
          sortedItems.sort((a, b) => a.title.localeCompare(b.title));
      break;
      case "Z-A" :
          sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high" :
           sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low" :
           sortedItems.sort((a, b) => b.price - a.price);
        break;
      default :
        break;
    }

     setFilteredItems(sortedItems);
   }


  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
      <h2 className='title'>Or subscribe to the newsletter</h2>
{/* Product cards */}
<div>
<div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-x-3 mb-3">
        <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
            <button onClick={showAll}>All products</button>
            <button onClick={() => filterItems("Dress")}>Clothing</button>
            <button onClick={() => filterItems("Hoodies")}>Hoodies</button>
            <button onClick={() => filterItems("Bag")}>Bag</button>
        </div>
        
        <div className='flex justify-end mb-4 rounded-sm'>
            <div className='bg-black p-2'>
                <FaFilter className='text-white h-4 w-4'/>
            </div>
            <select 
            id='sort'
            onChange={(e) => handleSortChange(e.target.value)}
            value={sortOption}
            className='bg-black text-white px-2 py-1 rounded-sm'>
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-to-high">Low to high</option>
            <option value="high-to-low">High to low</option>
            </select>
        </div>
      </div>
  <Cards filteredItems={filteredItems}/>
</div>
    
    </div>
  )
}

export default Products
