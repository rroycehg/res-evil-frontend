import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import CharDisplay from "./CharDisplay";
=======
import FavoriteCard from "./FavoriteCard";
>>>>>>> d5c5cfe9f52dce77b609d8b26f91de3f199026d8
import { Button, Card } from "semantic-ui-react";

function FavoriteContainer({ user, getChar, thisChar }) {
  const [favChar, setFavChar] = useState([]);

<<<<<<< HEAD
  useEffect(() => {
=======

    useEffect(() => {
>>>>>>> d5c5cfe9f52dce77b609d8b26f91de3f199026d8
    fetch("http://localhost:3000/favorites")
      .then((res) => res.json())
      .then((json) => {
        setFavChar(json);
      });
  }, []);

  const favCard = favChar.map((char) => {
    if (char.user_id === user.id) {
      return <CharacterCard key={char.id} char={char} getChar={getChar} />;
    } else {
      console.log("hiiii");
      return null;
    }
  });

<<<<<<< HEAD
  return (
    <div>
      <CharDisplay thisChar={thisChar} />
      <Card.Group itemsPerRow={4}>{favCard}</Card.Group>;
    </div>
  );
=======

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
>>>>>>> d5c5cfe9f52dce77b609d8b26f91de3f199026d8
}

export default FavoriteContainer;
