import { Grid } from "semantic-ui-react";
function CharDisplay({ thisChar }) {
  return (
    <div id="card-up">
      <table className="card-display">
        <thead className="header-holder">
          <tr className="header-text">
            <th>ID</th>
            <th>Bio</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="id-name">{thisChar.name}</td>
          </tr>
          <tr>
            <td>
              <img src={thisChar.img} alt="res-char-img" />
            </td>
            <td className="bio">{thisChar.bio}</td>
          </tr>
        </tbody>
        {/* <h3>Display Contents Here</h3>
      <Grid id="card-up">
        <Grid.Column width={4}>
          <div>
            <h3>{thisChar.name}</h3>
            <img src={thisChar.img} />
          </div>
        </Grid.Column>
        <Grid.Column width={8}>
          <h3>Bio: {thisChar.bio}</h3>
        </Grid.Column>
        <Grid.Column width={2}>
          <h3>EDIT FAVORITE</h3>
        </Grid.Column>
      </Grid> */}
      </table>
    </div>
  );
}

export default CharDisplay;
