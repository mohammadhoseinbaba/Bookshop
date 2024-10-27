import { useState } from "react"
import BookCreate from "./Component/BookCreate";

function App (){

const [books,setBooks]=useState([]);

const createBook=(title)=>{
    const updateBooks=[
        ...books,
        {id:123,title}
    ]
    setBooks(updateBooks)
}

    return <div><BookCreate onCreate={createBook}/></div>
}
export default App