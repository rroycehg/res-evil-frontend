import { Route, Switch, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CharacterContainer from "./CharacterContainer";
import FavoriteContainer from "./FavoriteContainer";
import Signup from "./Signup";
import Login from "./Login";
import NavBar from "./NavBar";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [thisChar, setThisChar] = useState({});
  const [user, setUser] = useState(null);
  const [openDisp, setOpenDisp] = useState(false);
  const [openEditor, setOpenEditor] = useState(false);
  const [openNew, setOpenNew] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/characters`)
      .then((res) => res.json())
      .then((json) => {
        setCharacters(json);
      });
  }, []);

  const getChar = (charObj) => {
    setThisChar(charObj);
    if (openDisp === false) {
      setOpenDisp(!openDisp);
    }
  };

  const clickEdit = () => {
    if (openEditor === false) {
      setOpenEditor(!openEditor);
    }
    if (openDisp === true) {
      setOpenDisp(!openDisp);
    }
  };

  const clickAddNew = () => {
    if (openNew === false) {
      setOpenNew(!openNew);
    }

    if (openDisp === true) {
      setOpenDisp(!openDisp);
    }
  };

  const addtoCharList = (newChar) => {
    let newCharArray = [...characters, newChar];
    setCharacters(newCharArray);
  };

  const deleteFromCharList = (thisChar) => {
    let newCharArray = characters.filter((char) => char.id !== thisChar);
    setCharacters(newCharArray);
  };

  const updateCharList = (updatedChar) => {
    let newCharArray = characters.map((char) => {
      if (char.id === updatedChar.id) {
        return updatedChar;
      } else {
        return char;
      }
    });
    setCharacters(newCharArray);
  };

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  console.log(user);

  function addToFavs(char) {
    if (user) {
      fetch("http://localhost:3000/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          character_id: char.id,
          user_id: user.id,
        }),
      });
    } else {
      alert("Must be logged in!");
    }
  }

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route
          path="/login"
          component={() => <Login user={user} setUser={setUser} />}
        ></Route>
        <Route
          path="/signup"
          component={() => <Signup setUser={setUser} />}
        ></Route>
        <Route
          path="/favorites"
          component={() => (
            <FavoriteContainer
              user={user}
              characters={characters}
              getChar={getChar}
              thisChar={thisChar}
            />
          )}
        ></Route>
        <Route
          path="/"
          component={() => (
            <CharacterContainer
              handleFavClick={addToFavs}
              openDisp={openDisp}
              openEditor={openEditor}
              openNew={openNew}
              characters={characters}
              getChar={getChar}
              thisChar={thisChar}
              updateCharList={updateCharList}
              addtoCharList={addtoCharList}
              deleteFromCharList={deleteFromCharList}
              clickEdit={clickEdit}
              clickAddNew={clickAddNew}
              handleFavClick={addToFavs}
            />
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default Home;
