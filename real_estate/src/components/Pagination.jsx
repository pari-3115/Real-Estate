function Pagination({currentPage,totalPages,setCurrentPage}){

if(totalPages === 0) return null

return(

<div className="flex justify-center gap-4 mt-10">

<button
onClick={()=>setCurrentPage(currentPage-1)}
disabled={currentPage===1}
className="border px-3 py-1 rounded"
>
Prev
</button>

<span>
{currentPage} / {totalPages}
</span>

<button
onClick={()=>setCurrentPage(currentPage+1)}
disabled={currentPage===totalPages}
className="border px-3 py-1 rounded"
>
Next
</button>

</div>

)

}

export default Pagination