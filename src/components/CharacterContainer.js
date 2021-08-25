import CharacterCard from "./CharacterCard";
import CharDisplay from "./CharDisplay";
import { Card } from "semantic-ui-react";

function CharacterContainer({ characters }) {
  const cards = characters.map((char) => (
    <CharacterCard
      key={char.id}
      name={char.name}
      affiliation={char.affiliation}
      bio={char.bio}
      img={char.img}
      vit={char.VIT}
      str={char.STR}
      def={char.DEF}
    />
  ));
  return (
    <>
      <CharDisplay />
      <Card.Group itemsPerRow={4}>{cards}</Card.Group>;
    </>
  );
}

export default CharacterContainer;
