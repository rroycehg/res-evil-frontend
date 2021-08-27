import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

function Editor({ thisChar, clickToClose }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [bio, setBio] = useState("");
  const [hp, setHP] = useState(0);
  const [str, setStr] = useState(0);
  const [def, setDef] = useState(0);
  return (
    <form id="card-up" onSubmit={() => console.log("submitted")}>
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
                <img src={thisChar.img} alt="res-char-img" />
              </div>
            </td>
            <td className="edit-bio">
              <textarea
                className="edit-textarea"
                defaultValue={thisChar.bio}
                onchange=""
                placeholder="Type Bio Here"
              ></textarea>
            </td>
            <td>
              <div class="stat-bar" data-total="1000" data-value="1000">
                <div id="hp" class="bar">
                  <label>HP: </label>
                  <input type="text" value={thisChar.VIT} onChange="" />
                </div>
              </div>
              <div class="stat-bar" data-total="1000" data-value="1000">
                <div id="str" class="bar">
                  <label>STR: </label>
                  <input type="text" value={thisChar.STR} onChange="" />
                </div>
              </div>
              <div class="stat-bar" data-total="1000" data-value="1000">
                <div id="def" class="bar">
                  <label>DEF: </label>
                  <input type="text" value={thisChar.DEF} onChange="" />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="id-name">
              <label>Name: </label>
              <input text="text" value={thisChar.name} onChange="" />
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
