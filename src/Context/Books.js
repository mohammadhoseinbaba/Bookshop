import { createContext, useState} from "react";
import axios from "axios";




const BooksContext = createContext()

function Provider({children}){ 
    const [books,setBooks]=useState([]);

const FetchBooks= async()=>{
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
}
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
    const valueToShare={
books,
editBookByID,
deleteBookByID,
createBook,
FetchBooks
    }
    return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>
}
export { Provider };
export default BooksContext


