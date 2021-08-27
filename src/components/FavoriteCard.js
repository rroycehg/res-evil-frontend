import { Button, Card } from "semantic-ui-react";
import { useState } from "react";

function FavoriteCard({ char, getChar }) {
    const [bioToggle, setBioToggle] = useState(true);

    const bioDisplay = () => {
        setBioToggle(!bioToggle);
        console.log(bioToggle);
      };

      const fav = char.character

    return(
    <Card id="res">
    <img src={fav.img} wrapped ui="false" className="res-img" />
    <Card.Content>
    <Card.Header>{fav.name}</Card.Header>
    <Card.Meta>
        <span className="affiliation">{fav.affiliation}</span>
    </Card.Meta>
    {!bioToggle ? (
        <Card.Description className="res-bio">
        Bio: {fav.bio}
        </Card.Description>
    ) : null}
    </Card.Content>
    <Card.Content id="stats" extra>
    <a>
        <span className="stats">VIT: {fav.VIT} </span>
        <span className="stats">STR: {fav.STR} </span>
        <span className="stats">DEF: {fav.DEF} </span>
    </a>
    </Card.Content>
    <span>
    <Button content="Expand" primary />
    </span>
    <span>
    <Button content="Check" onClick={() => getChar(fav)} secondary />
    </span>
</Card>

    )
}

export default FavoriteCard