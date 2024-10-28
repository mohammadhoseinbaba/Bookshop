import { useState } from "react"
import BookEdite from "./BookEdite"

function BookShow ({book,onDelete,onEdit}){
    
const [showEdit,setShowEdite]=useState(false)


const handleDeleteClick=()=>{
    onDelete(book.id)
}

const handleEditeClick=()=>{
setShowEdite(!showEdit)
    
}
 const  handleSubmit= (id , newTitle)=>{
    setShowEdite(false)
    onEdit(id,newTitle)
 }

let content = <h3>{book.title}</h3>
if (showEdit)
{
    content=<BookEdite onSubmit={handleSubmit} book={book}/>
}



    return( 
    <div>
        <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
       <div>{content}</div>
        <div>
            <button onClick={handleEditeClick}>
                Edit
            </button>
            <button onClick={handleDeleteClick}>
                Delete
            </button>
        </div>
         </div>)
}
export default BookShow     