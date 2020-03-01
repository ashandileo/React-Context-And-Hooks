import React, { useState, useEffect } from 'react'
import NewSongForm from './NewSongForm'

const SongList = () => {

    const [songs, setSongs] = useState([
        { title: 'lagu pertama', id: 1 },
        { title: 'lagu kedua', id: 2 },
        { title: 'lagu ketiga', id: 3 }
    ])

    const [age, setAge] = useState(20)

    const addSong = (title) => {
        setSongs([...songs, { title, id: Math.random() }])
    }

    useEffect(() => {
        console.log('use effect ran', songs)
    }, [songs])

    useEffect(() => {
        console.log('use effect ran', age)
    }, [age])

    return (
        <div className="song-list">
            <ul>
                { songs.map(song => {
                    return ( <li key={song.id}> {song.title} </li> )
                }) }
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>Tambah umur : {age}</button>
        </div>
    )
}

export default SongList