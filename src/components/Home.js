import React, { useState, useEffect } from "react";
import CharacterContainer from "./CharacterContainer";
import FavoriteContainer from "./FavoriteContainer";
// import { Container } from "semantic-ui-react";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [thisChar, setThisChar] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/characters`)
      .then((res) => res.json())
      .then((json) => {
        setCharacters(json);
      });
  }, []);

  const getChar = (charObj) => {
    setThisChar(charObj);
  };

  return (
    <div>
      <CharacterContainer
        characters={characters}
        getChar={getChar}
        thisChar={thisChar}
      />
      {/* <FavoriteContainer /> */}
    </div>
  );
}

export default Home;
