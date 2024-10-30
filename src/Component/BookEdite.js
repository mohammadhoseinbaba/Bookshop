import { useState,useContext } from "react"
import BooksContext from "../Context/Books"

function BookEdite({book,onSubmit}){


const [editValue,setEditValue]=useState(book.title)
const {editBookByID}=useContext(BooksContext)
const handleEditSubmit=(event)=>{
event.preventDefault()
onSubmit()
editBookByID(book.id,editValue)
}

const handleEditeValue=(event)=>{
setEditValue(event.target.value)
}

    return <form onSubmit={handleEditSubmit}>
        <label>title</label>
        <input value={editValue} onChange={handleEditeValue}></input>
        <button>Save</button>
    </form>
}
export default BookEdite