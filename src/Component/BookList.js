import BookShow from "./BookShow"
import { useContext } from "react"
import BooksContext from "../Context/Books"

function BookList (){
const {books}=useContext(BooksContext)

    const renderedbooks= books.map((book)=>{
return <BookShow  key={book.id} book={book}/>})

    return( 
        <div>
        {renderedbooks}
     </div>
)

}
export default BookList