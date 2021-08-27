import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import CharDisplay from "./CharDisplay";
import NewChar from "./NewChar";
import Editor from "./Editor";
import { Card } from "semantic-ui-react";

function CharacterContainer({
  characters,
  getChar,
  thisChar,
  openDisp,
  openEditor,
  openNew,
  handleFavClick,
  makeEdit,
  addtoCharList,
  deleteFromCharList,
  updateCharList,
  clickEdit,
  clickAddNew,
}) {
  const [isClosed, setIsClosed] = useState(false);
  const cards = characters.map((char) => (
    <CharacterCard
      key={char.id}
      char={char}
      getChar={getChar}
      handleFavClick={handleFavClick}
      deleteFromCharList={deleteFromCharList}
    />
  ));

  const clickToClose = () => {
    setIsClosed(!isClosed);
  };

  return (
    <>
      {openDisp ? (
        <CharDisplay
          thisChar={thisChar}
          clickToClose={clickToClose}
          clickEdit={clickEdit}
          clickAddNew={clickAddNew}
        />
      ) : null}
      {openEditor ? (
        <Editor
          thisChar={thisChar}
          clickToClose={clickToClose}
          updateCharList={updateCharList}
        />
      ) : null}
      {openNew ? <NewChar addtoCharList={addtoCharList} /> : null}
      <Card.Group itemsPerRow={4}>{cards}</Card.Group>;
    </>
  );
}

export default CharacterContainer;
