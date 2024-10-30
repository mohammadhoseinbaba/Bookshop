import { createContext} from "react";

const BooksContext = createContext()

function Provider({children}){ 
    const [books,setBooks]=useState([]);

const FetchBooks= async()=>{
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
}
    return <BooksContext.Provider value={{}}>{children}</BooksContext.Provider>
}
export { Provider };
export default BooksContext


