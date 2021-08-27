import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import CharDisplay from "./CharDisplay";
import NewChar from "./NewChar";
import Editor from "./Editor";
import { Card } from "semantic-ui-react";

function CharacterContainer({ characters, getChar, thisChar, visible, handleFavClick }) {
  const [isClosed, setIsClosed] = useState(false);
  const cards = characters.map((char) => (
    <CharacterCard
      key={char.id}
      char={char}
      getChar={getChar}
      handleFavClick={handleFavClick}
    />
  ));

  const clickToClose = () => {
    setIsClosed(!isClosed);
  };

  return (
    <>
      {visible ? (
        <CharDisplay thisChar={thisChar} clickToClose={clickToClose} />
      ) : null}
      <Editor thisChar={thisChar} clickToClose={clickToClose} />
      <NewChar />
      <Card.Group itemsPerRow={4}>{cards}</Card.Group>;
    </>
  );
}

export default CharacterContainer;
