import React, { useState } from 'react'

const SongList = () => {

    const [songs, setSongs] = useState([
        { title: 'lagu pertama', id: 1 },
        { title: 'lagu kedua', id: 2 },
        { title: 'lagu ketiga', id: 3 }
    ])

    const addSong = () => {
        setSongs([...songs, { title: 'lagu keempat', id: Math.random() }])
    }

    return (
        <div className="song-list">
            <ul>
                { songs.map(song => {
                    return ( <li key={song.id}> {song.title} </li> )
                }) }
            </ul>
            <button onClick={addSong}>Add song</button>
        </div>
    )
}

export default SongList