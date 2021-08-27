import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CharacterCard from "./CharacterCard";
import CharDisplay from "./CharDisplay";
import { Button, Card } from "semantic-ui-react";

function FavoriteContainer({user, getChar, thisChar}) {
    const [favChar, setFavChar] = useState([])
    


    useEffect((user) => {
    fetch("http://localhost:3000/favorites")
    .then((res) => res.json())
    .then((json) => {setFavChar(json);
      })
    }, [])


    const favCard = favChar.map((char) => {
        if (char.user_id === user.id) {
            return <CharacterCard key={char.id} char={char} getChar={getChar} />
        } else {
            console.log("hiiii")
            return null
        }
    })
    
    
    
    return(
        <div>
            <CharDisplay thisChar={thisChar}/>
            <Card.Group itemsPerRow={4}>{favCard}</Card.Group>;
        </div>
    )
}

export default FavoriteContainer