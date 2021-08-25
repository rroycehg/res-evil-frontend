import { Button, Card } from "semantic-ui-react";
import { useState } from "react";

function CharacterCard({ name, affiliation, bio, img, vit, str, def }) {
  const [bioToggle, setBioToggle] = useState(true);

  const bioDisplay = () => {
    setBioToggle(!bioToggle);
    console.log(bioToggle);
  };
  return (
    <Card id="res">
      <img src={img} alt={name} wrapped ui="false" className="res-img" />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="affiliation">{affiliation}</span>
        </Card.Meta>
        {!bioToggle ? (
          <Card.Description className="res-bio">{bio}</Card.Description>
        ) : null}
      </Card.Content>
      <Card.Content id="stats" extra>
        <a>
          <span className="stats">VIT: {vit} </span>
          <span className="stats">STR: {str} </span>
          <span className="stats">DEF: {def} </span>
        </a>
      </Card.Content>
      <span>
        <Button content="Bio" onClick={bioDisplay} primary />
      </span>
      <span>
        <Button content="Favorite" secondary />
      </span>
    </Card>
  );
}

export default CharacterCard;
