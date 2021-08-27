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


useEffect(() => {
fetch(`http://localhost:3000/characters`)
    .then((res) => res.json())
    .then((json) => {
    setCharacters(json);
    });
}, []);

const getChar = (charObj) => {
setThisChar(charObj);
};

useEffect(() => {
fetch("http://localhost:3000/me").then((r) => {
    if (r.ok) {
    r.json().then((user) => setUser(user));
    }
});
}, []);



console.log(user)




function addToFavs(char) {
if (user) {    
fetch("http://localhost:3000/favorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        character_id: char.id,
        user_id: user.id
    })
})
} else {
    alert('Must be logged in!')
}

}



return (
    <div>
        <NavBar user={user} setUser={setUser}/>
        <Switch>
        <Route path="/login" component={() => <Login user={user} setUser={setUser}/>}></Route>
        <Route
            path="/signup"
            component={() => <Signup setUser={setUser} />}
        ></Route>
        <Route
            path="/favorites"
            component={() => <FavoriteContainer 
                user={user}
                characters={characters}
                getChar={getChar}
                thisChar={thisChar}
                />}
        ></Route>
        <Route
            path="/"
            component={() => (
            <CharacterContainer
                characters={characters}
                getChar={getChar}
                thisChar={thisChar}
                handleFavClick={addToFavs}
            />
            )}
        ></Route>
        </Switch>
    </div>
    );
}

export default Home;
