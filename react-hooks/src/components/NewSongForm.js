import React, { useState } from 'react'

const NewSongForm = ({ addSong }) => {

    const [ title, setTitle ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addSong(title)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>New Song :</label>
            <input type="text" onChange={ (e) => setTitle(e.target.value) } value={title} />
            <button type="submit">Add Song</button>
        </form>
    )
}

export default NewSongForm