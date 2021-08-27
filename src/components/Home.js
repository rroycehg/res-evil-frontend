import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CharacterContainer from "./CharacterContainer";
import FavoriteContainer from "./FavoriteContainer";
import Signup from "./Signup";
import Login from "./Login";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [thisChar, setThisChar] = useState({});
  const [user, setUser] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/characters`)
      .then((res) => res.json())
      .then((json) => {
        setCharacters(json);
      });
  }, []);

  const getChar = (charObj) => {
    setThisChar(charObj);
    if (visible === false) {
      setVisible(!visible);
    }
  };

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/login" component={() => <Login />}></Route>
        <Route
          path="/signup"
          component={() => <Signup setUser={setUser} />}
        ></Route>
        <Route
          path="/favorites"
          component={() => <FavoriteContainer />}
        ></Route>
        <Route
          path="/"
          component={() => (
            <CharacterContainer
              visible={visible}
              characters={characters}
              getChar={getChar}
              thisChar={thisChar}
            />
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default Home;
