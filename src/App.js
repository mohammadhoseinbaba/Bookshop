import { useState , useEffect } from "react"
import BookCreate from "./Component/BookCreate";
import BookList from "./Component/BookList";
import axios from "axios";

function App (){

const [books,setBooks]=useState([]);

const FetchBooks= async()=>{
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
}
       
useEffect(()=>{
    FetchBooks()
},[])

const editBookByID=(id,newTitle)=>{
    const updatedBook=books.map((book)=>{
if (book.id===id){
    return {...books,title:newTitle}
}
return book
})
setBooks(updatedBook)
}

const deleteBookByID=(id)=>{
    const updatedBooks = books.filter((book)=>{
       return book.id!==id
    })


    setBooks(updatedBooks)
}


const createBook=async(title)=>{

const response =await axios.post('http://localhost:3001/books',{
    title
})



    const updateBooks=[...books,response.data]
    setBooks(updateBooks)
}

    return <div>
        <h1>Reading List</h1>
        <BookCreate onCreate={createBook}/>
        <BookList onEdit={editBookByID} books={books} onDelete={deleteBookByID}/>
        </div>
}
export default App