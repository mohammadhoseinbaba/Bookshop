import { useState,useContext } from "react"
import BooksContext from "../Context/Books"

function BookCreate(){

     const [inputvalue,setInputvalue]=useState('')
const {createBook}=useContext(BooksContext)
const handleChange = (event)=>{
setInputvalue(event.target.value)
}

const handleSubmit=(event)=>{
    event.preventDefault()
createBook(inputvalue)
setInputvalue('')
}
     
    return <div>
        <form onSubmit={handleSubmit}>
            <label>Add a Book</label>
            <input value={inputvalue} onChange={handleChange}/>
            <button>Create!</button>
        </form>
    </div>
}
export default BookCreate