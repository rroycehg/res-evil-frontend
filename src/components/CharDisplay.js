import { Button } from "semantic-ui-react";
function CharDisplay({ thisChar, clickToClose, clickEdit, clickAddNew }) {
  return (
    <div id="card-up">
      <table className="card-display">
        <thead className="header-holder">
          <tr className="header-text">
            <th>ID</th>
            <th>Bio</th>
            <th>Stats</th>
          </tr>
          <button className="close-button" onClick={clickToClose}>
            x
          </button>
        </thead>
        <tbody className="body-content">
          <tr>
            <td>
              <img src={thisChar.img} alt="res-char-img" />
            </td>
            <td className="bio">{thisChar.bio}</td>
            <td>
              <div class="stat-bar" data-total="1000" data-value="1000">
                <div id="hp" class="bar">
                  <h3>HP: {thisChar.VIT}</h3>
                </div>
              </div>
              <div class="stat-bar" data-total="1000" data-value="1000">
                <div id="str" class="bar">
                  <h3>STR: {thisChar.STR}</h3>
                </div>
              </div>
              <div class="stat-bar" data-total="1000" data-value="1000">
                <div id="def" class="bar">
                  <h3>DEF: {thisChar.DEF}</h3>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="id-name">{thisChar.name}</td>
            <td className="buttons">
              <span>
                <Button content="Edit Form 🔒" onClick={clickEdit} />
              </span>
              <span>
                <Button content="Create" onClick={clickAddNew} />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CharDisplay;
