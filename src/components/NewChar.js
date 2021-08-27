import React, { useState, useEffect } from "react";

function NewChar({ addtoCharList }) {
  const [newName, setNewName] = useState("");
  const [newImg, setNewImg] = useState("");
  const [newAff, setNewAff] = useState("");
  const [newBio, setNewBio] = useState("");
  const [newHp, setNewHp] = useState("");
  const [newStr, setNewStr] = useState("");
  const [newDef, setNewDef] = useState("");

  const makeNew = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/characters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        img: newImg,
        affiliation: newAff,
        bio: newBio,
        VIT: newHp,
        STR: newStr,
        DEF: newDef,
      }),
    })
      .then((response) => response.json())
      .then((newData) => addtoCharList(newData));
  };
  return (
    <form className="new-form-div" onSubmit={makeNew}>
      <div className="new-form">
        <table>
          <tr>
            <div className="fields">
              <td>
                <div className="new-row-one">
                  <label>Name: </label>
                  <input
                    type="text"
                    placeholder="Character Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                </div>
              </td>
              <td>
                <div className="new-row-one">
                  <label>Image: </label>
                  <input
                    type="text"
                    placeholder="URL Here"
                    value={newImg}
                    onChange={(e) => setNewImg(e.target.value)}
                  />
                </div>
              </td>
              <td>
                <div className="new-row-one">
                  <label>Affiliation: </label>
                  <input
                    type="text"
                    placeholder="Affiliation"
                    value={newAff}
                    onChange={(e) => setNewAff(e.target.value)}
                  />
                </div>
              </td>
            </div>
          </tr>
          <tr>
            <div className="fields">
              <td>
                <div className="new-row-two">
                  <label className="bio-label">Bio: </label>
                  <textarea
                    placeholder="Insert Text"
                    className="bio-container"
                    value={newBio}
                    onChange={(e) => setNewBio(e.target.value)}
                  />
                </div>
              </td>
              <td>
                <div>
                  <div className="stat-fields">
                    <label>HP: </label>
                    <input
                      type="text"
                      placeholder="HP"
                      id="hp-input"
                      value={newHp}
                      onChange={(e) => setNewHp(e.target.value)}
                    />
                  </div>
                  <div className="stat-fields">
                    <label>STR: </label>
                    <input
                      type="text"
                      placeholder="STR"
                      id="stat-input"
                      value={newStr}
                      onChange={(e) => setNewStr(e.target.value)}
                    />
                  </div>
                  <div className="stat-fields">
                    <label>DEF: </label>
                    <input
                      type="text"
                      placeholder="DEF"
                      id="stat-input"
                      value={newDef}
                      onChange={(e) => setNewDef(e.target.value)}
                    />
                  </div>
                </div>
              </td>
            </div>
          </tr>
          <button type="submit" className="upload-new">
            Submit
          </button>
        </table>
      </div>
    </form>
  );
}

export default NewChar;
