import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import BooksContext from './Context/Books.js'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
root.render(
<BooksContext.Provider value={5}>
<App />
</BooksContext.Provider>
)
