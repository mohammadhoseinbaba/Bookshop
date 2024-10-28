import { useState } from "react"
import BookCreate from "./Component/BookCreate";
import BookList from "./Component/BookList";

function App (){

const [books,setBooks]=useState([]);

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


const createBook=(title)=>{
    const updateBooks=[
        ...books,
        {id: Math.round(Math.random()*9999) , title}
    ]
    setBooks(updateBooks)
}

    return <div>
        <h1>Reading List</h1>
        <BookCreate onCreate={createBook}/>
        <BookList onEdit={editBookByID} books={books} onDelete={deleteBookByID}/>
        </div>
}
export default App