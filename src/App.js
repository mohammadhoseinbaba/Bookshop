import { useState , useEffect } from "react"
import BookCreate from "./Component/BookCreate";
import BookList from "./Component/BookList";
import axios from "axios";

function App (){


       
useEffect(()=>{
    FetchBooks()
},[])

const editBookByID= async (id,newTitle)=>{
const response= await axios.put(`http://localhost:3001/books/${id}`,{
title:newTitle
})

    const updatedBook=books.map((book)=>{
if (book.id===id){
    return {...books, ...response.data}
}
return book
})

setBooks(updatedBook)
}

const deleteBookByID= async (id)=>{
await axios.delete(`http://localhost:3001/books/${id}`)

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