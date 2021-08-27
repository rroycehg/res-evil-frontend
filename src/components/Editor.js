import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

function Editor({ thisChar, clickToClose, updateCharList, clickEdit }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [bio, setBio] = useState("");
  const [hp, setHP] = useState(0);
  const [str, setStr] = useState(0);
  const [def, setDef] = useState(0);

  useEffect(() => {
    setName(thisChar.name);
    setImg(thisChar.img);
    setBio(thisChar.bio);
    setHP(thisChar.VIT);
    setStr(thisChar.STR);
    setDef(thisChar.DEF);
  }, [thisChar]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const editedChar = {
      name: name,
      img: img,
      bio: bio,
      VIT: hp,
      STR: str,
      DEF: def,
    };

    fetch(`http://localhost:3000/characters/${thisChar.id}`, {
      method: "PATCH", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedChar),
    })
      .then((response) => response.json())
      .then((updatedChar) => updateCharList(updatedChar));
  };
  return (
    <form id="card-up" onSubmit={handleSubmit}>
      <table className="editor-display">
        <thead className="header-holder">
          <tr className="header-text">
            <th>ID</th>
            <th>Bio</th>
            <th>Stats</th>
          </tr>
        </thead>
        <tbody className="body-content">
          <tr>
            <td>
              <div>
                <img src={img} alt="res-char-img" />
              </div>
            </td>
            <td className="edit-bio">
              <textarea
                className="edit-textarea"
                defaultValue={bio}
                onchange={(e) => setBio(e.target.value)}
                placeholder="Type Bio Here"
              ></textarea>
            </td>
            <td>
              <div class="stat-bar" data-total="1000" data-value="1000">
                <div id="hp" class="bar">
                  <label>HP: </label>
                  <input
                    type="number"
                    value={hp}
                    onChange={(e) => setHP(e.target.value)}
                  />
                </div>
              </div>
              <div class="stat-bar" data-total="1000" data-value="1000">
                <div id="str" class="bar">
                  <label>STR: </label>
                  <input
                    type="number"
                    value={str}
                    onChange={(e) => setStr(e.target.value)}
                  />
                </div>
              </div>
              <div class="stat-bar" data-total="1000" data-value="1000">
                <div id="def" class="bar">
                  <label>DEF: </label>
                  <input
                    type="number"
                    value={def}
                    onChange={(e) => setDef(e.target.value)}
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="id-name">
              <label>Name: </label>
              <input
                text="text"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td className="buttons">
              <span>
                <Button content="Submit Changes" type="submit" />
              </span>
              <span>
                <Button content="Cancel" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default Editor;
