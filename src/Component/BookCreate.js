import { useState } from "react"

function BookCreate({onCreate}){

     const [inputvalue,setInputvalue]=useState('')

const handleChange = (event)=>{
setInputvalue(event.target.value)
}

const handleSubmit=(event)=>{
    event.preventDefault()
onCreate(inputvalue)
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