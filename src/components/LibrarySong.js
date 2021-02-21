import React from 'react'

const LibrarySong = ({song, songs, setCurrentSong, id, audioRef, isPlaying}) => {    
// Event Handler 
const songSelectHandler = () => {
    // Selecting song
    setCurrentSong(song)
    // check if song is playing
    if(isPlaying) {
        const playPromise = audioRef.current.play()
        if(playPromise !== undefined) {
            playPromise.then((audio) => {
                audioRef.current.play()
            })
        }
    }
}

    return(
        <div onClick={songSelectHandler} className="library-song">
            <img alt={song.name} src={song.cover} />
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong