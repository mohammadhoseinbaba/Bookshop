import BookShow from "./BookShow"


function BookList ({books, onDelete,onEdit}){


    const renderedbooks= books.map((book)=>{
return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>})

    return( 
        <div>
        {renderedbooks}
     </div>
)

}
export default BookList