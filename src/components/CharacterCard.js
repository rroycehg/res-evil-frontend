import { Button, Card } from "semantic-ui-react";
import { useState } from "react";

function CharacterCard({ char, getChar, handleFavClick, deleteFromCharList }) {
  const [bioToggle, setBioToggle] = useState(true);

  const handleDelete = () => {
    fetch(`http://localhost:3000/characters/${char.id}`, {
      method: "DELETE",
    });
    deleteFromCharList(char.id);
  };

  const bioDisplay = () => {
    setBioToggle(!bioToggle);
    console.log(bioToggle);
  };

  return (
    <Card id="res">
      <img src={char.img} wrapped ui="false" className="res-img" />
      <Card.Content>
        <Card.Header>{char.name}</Card.Header>
        <Card.Meta>
          <span className="affiliation">{char.affiliation}</span>
        </Card.Meta>
        {!bioToggle ? (
          <Card.Description className="res-bio">
            Bio: {char.bio}
          </Card.Description>
        ) : null}
      </Card.Content>
      <Card.Content id="stats" extra>
        <a>
          <span className="stats">VIT: {char.VIT} </span>
          <span className="stats">STR: {char.STR} </span>
          <span className="stats">DEF: {char.DEF} </span>
        </a>
      </Card.Content>
      <span>
        <Button content="Expand" onClick={bioDisplay} primary />
      </span>
      <span>
        <Button content="Check" onClick={() => getChar(char)} secondary />
        <Button content="Add to Favorite" onClick={() => handleFavClick(char)}>
          ⭐
        </Button>
        <Button content="Delete" onClick={() => handleDelete(char)}>
          🗑️
        </Button>
      </span>
    </Card>
  );
}

export default CharacterCard;
