import { Route, Router, Switch } from "react-router-dom";
import React, {useState, useEffect} from "react"
import CharacterContainer from "./CharacterContainer"
import FavoriteContainer from "./FavoriteContainer"
import Signup from "./Signup";




function Home() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
    fetch(`http://localhost:3000/characters`)
      .then((res) => res.json())
      .then((json) => {
        setCharacters(json);
      })
    }, [] )


    return (
        <div>
            <Switch>
            <Route path="/login" component= {() => <Login /> }></Route>    
            <Route path="/signup" component= {() => <Signup /> }></Route>
            <Route path="/favorites" component= {() => <FavoriteContainer /> }></Route>
            <Route path="/" component= {() => <CharacterContainer characters={characters}/> }></Route>
            </Switch>
        </div>
        
    )

}

export default Home