import React, {useState, useEffect} from "react"
import CharacterContainer from "./CharacterContainer"
import FavoriteContainer from "./FavoriteContainer"




function Home() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
    fetch(`http://localhost:3000/characters`)
      .then((res) => res.json())
      .then((json) => {
        setCharacters(json);
      })
    }, [] )


    return (
        <div>
            <CharacterContainer characters={characters}/>
            {/* <FavoriteContainer /> */}
        </div>
        
    )

}

export default Home