import { Card } from "semantic-ui-react";

function CharacterCard({ name, affiliation, bio, img }) {
  return (
    <Card id="res">
      <img src={img} wrapped ui="false" className="res-img" />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="affiliation">{affiliation}</span>
        </Card.Meta>
        <Card.Description className="res-bio">{bio}</Card.Description>
      </Card.Content>
      <Card.Content id="stats" extra>
        <a>
          <i name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  );
}

export default CharacterCard;
