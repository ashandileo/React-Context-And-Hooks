import React, { createContext, useState } from 'react'

export const BookContext = createContext()

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([
        { id: '1', title: 'Matematika', author: 'Achmad Ardani Prasha' },
        { id: '2', title: 'Bahasa Jepang', author: 'Handrian Wibusono' },
        { id: '3', title: 'Bahasa Indonesia', author: 'Luthfi Arifin' },
    ])

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: Math.random()}])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContextProvider