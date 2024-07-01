import React ,{useEffect, useState} from 'react'
import Cards5 from '../../components/Cards5';

const House = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default")
 useEffect(() => {
   const fetchData = async () => {
     try{
  const response = await fetch("/house.json");
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
        <div className=''>
            <h1 className="title">Home & Living</h1>
            <div className="mt-8 flex flex-col md:flex-row items-center gap-4 justify-center">
            <p className="font-semibold uppercase md: text-center bg-black text-white md:p-1.5 p-2 rounded-sm
    inline-flex items-center ">Here you can find electical appliances & tools every household needs</p>
            </div>
       
        </div>
      <Cards5 filteredItems={filteredItems}/>
    </div>
  )
}

export default House
