import { Grid } from "semantic-ui-react";
function CharDisplay() {
  return (
    <div>
      <h3>Display Contents Here</h3>
      <Grid id="card-up">
        <Grid.Column width={4}>
          <img src="/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={5}>
          <h3>BIO HERE</h3>
        </Grid.Column>
        <Grid.Column width={3}>
          <h3>EDIT FAVORITE</h3>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default CharDisplay;
