import CharacterCard from "./CharacterCard";
import CharDisplay from "./CharDisplay";
import { Card } from "semantic-ui-react";

function CharacterContainer({ characters, getChar, thisChar }) {
  const cards = characters.map((char) => (
    <CharacterCard key={char.id} char={char} getChar={getChar} />
  ));
  return (
    <>
      <CharDisplay thisChar={thisChar} />
      <Card.Group itemsPerRow={4}>{cards}</Card.Group>;
    </>
  );
}

export default CharacterContainer;
