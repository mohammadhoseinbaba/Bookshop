import { useState } from "react"
import BookCreate from "./Component/BookCreate";
import BookList from "./Component/BookList";

function App (){

const [books,setBooks]=useState([]);

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
        <BookCreate onCreate={createBook}/>
        <BookList books={books} onDelete={deleteBookByID}/>
        </div>
}
export default App