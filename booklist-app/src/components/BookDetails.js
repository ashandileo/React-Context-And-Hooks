import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ( { book } )  => {

    const { removeBook } = useContext(BookContext)

    return (
        <li>
            <div>
                <div className="title">{ book.title }</div>
                <div className="author">{ book.author }</div>
            </div>
            <div>
                <button onClick={ () => removeBook(book.id) }>Delete</button>
            </div>
        </li>
    )

}

export default BookDetails