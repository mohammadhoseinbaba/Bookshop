import BookShow from "./BookShow"
import { useContext } from "react"
import BooksContext from "../Context/Books"

function BookList ({books, onDelete,onEdit}){
const num = useContext(BooksContext)

    const renderedbooks= books.map((book)=>{
return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>})

    return( 
        <div>
        <div>{num}</div>
        <div>{renderedbooks}</div>
     </div>
)
}
export default BookList