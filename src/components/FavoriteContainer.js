import React, { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";
import { Button, Card } from "semantic-ui-react";

function FavoriteContainer({user, getChar, thisChar}) {
    const [favChar, setFavChar] = useState([])
    


    useEffect(() => {
    fetch("http://localhost:3000/favorites")
    .then((res) => res.json())
    .then((json) => {setFavChar(json);
      })
    }, [])



    const favCard = favChar.map((char) => {
        if (char.user_id === user.id && !favChar.includes(char.user_id)) {
            return <FavoriteCard key={char.id} char={char} getChar={getChar}/>
        } else {
            console.log("hiiii")
            return null
        }
    })
    
    
    
    return(
        <div>
            <h1>My Favorites</h1>
            {/* <CharDisplay thisChar={thisChar}/> */}
            <Card.Group itemsPerRow={4}>{favCard}</Card.Group>;
        </div>
    )
}

export default FavoriteContainer