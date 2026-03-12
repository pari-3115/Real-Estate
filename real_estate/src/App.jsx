import { useState, useEffect } from "react";
import { properties } from "./data/properties";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filters from "./components/Filters";
import PropertyCard from "./components/PropertyCard";
import Pagination from "./components/Pagination";

function App() {

  const [typeFilter,setTypeFilter] = useState("all")
  const [priceFilter,setPriceFilter] = useState("all")
  const [currentPage,setCurrentPage] = useState(1)
  const [perPage,setPerPage] = useState(6)

  useEffect(()=>{

    const updatePageSize = () => {
      if(window.innerWidth < 640){
        setPerPage(9)
      }else{
        setPerPage(6)
      }
    }

    updatePageSize()
    window.addEventListener("resize",updatePageSize)

    return () => window.removeEventListener("resize",updatePageSize)

  },[])

  let filtered = properties

  if(typeFilter !== "all"){
    filtered = filtered.filter(p=>p.type===typeFilter)
  }

  if(priceFilter !== "all"){
    filtered = filtered.filter(p=>p.price<=priceFilter)
  }

  const last = currentPage * perPage
  const first = last - perPage

  const currentProperties = filtered.slice(first,last)
  const totalPages = Math.ceil(filtered.length/perPage)

  const resetFilters = () => {
    setTypeFilter("all")
    setPriceFilter("all")
  }

  return(

<div>

<Header/>

<div className="max-w-6xl mx-auto px-4 py-10">

<h1 className="heading-font text-3xl text-center mb-4">
Discover the Best Properties
</h1>

<Filters
setTypeFilter={setTypeFilter}
setPriceFilter={setPriceFilter}
/>

<div className="flex justify-between items-center mt-6 text-sm">

<p>{filtered.length} Results Found</p>

<button
onClick={resetFilters}
className="flex items-center gap-2"
>

<span className="w-4 h-4 border rounded-full"></span>
Reset All Filters

</button>

</div>

<hr className="my-4"/>

<div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">

{currentProperties.map(property=>(
<PropertyCard
key={property.id}
property={property}
/>
))}

</div>

<Pagination
currentPage={currentPage}
totalPages={totalPages}
setCurrentPage={setCurrentPage}
/>

</div>

<Footer/>

</div>

)

}

export default App