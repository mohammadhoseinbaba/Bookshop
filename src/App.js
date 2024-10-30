import { useEffect , useContext } from "react"
import BookCreate from "./Component/BookCreate";
import BookList from "./Component/BookList";
import BooksContext from "./Context/Books";

function App (){
    const{FetchBooks}=useContext(BooksContext); 

useEffect(()=>{
    FetchBooks()},[]);



    return <div>
        <h1>Reading List</h1>
        <BookCreate />
        <BookList />
        </div>
}
export default App