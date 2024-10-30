import { useState , useContext} from "react"
import BooksContext from "../Context/Books"
import BookEdite from "./BookEdite"

function BookShow ({book}){
    
const [showEdit,setShowEdite]=useState(false)
const{deleteBookByID} = useContext(BooksContext)

const handleDeleteClick=()=>{
    deleteBookByID(book.id);
}

const handleEditeClick=()=>{
setShowEdite(!showEdit)
    
}
 const  handleSubmit= ()=>{
    setShowEdite(false)
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