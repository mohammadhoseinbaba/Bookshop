function BookShow ({book,onDelete}){
const handleClick=()=>{
    onDelete(book.id)
}



    return <div>
        {book.title}
        <div>
            <button onClick={handleClick}>
                Delete
            </button>
        </div>
         </div>
}
export default BookShow