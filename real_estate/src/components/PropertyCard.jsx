import {useState} from "react"
import ContactModal from "./ContactModal"

function PropertyCard({property}){

const[open,setOpen] = useState(false)

return(

<div>

<img
src={property.image}
className="w-full h-44 object-cover rounded"
/>

<div className="mt-2 text-center">

<h3 className="heading-font font-medium">
{property.title}
</h3>

<p className="text-gray-500 text-sm">
{property.location}
</p>

<p className="font-semibold">
AED {property.price.toLocaleString()}
</p>

<button
onClick={()=>setOpen(true)}
className="w-full bg-white text-black py-2 mt-2 border rounded-2xl"
>
Contact
</button>

</div>

{open && <ContactModal setOpen={setOpen}/>}

</div>

)

}

export default PropertyCard