import BookShow from "./BookShow"

function BookList ({books, onDelete}){
    const renderedbooks= books.map((book)=>{
return <BookShow onDelete={onDelete} key={book.id} book={book}/>})

    return <div>{renderedbooks}</div>
}
export default BookList