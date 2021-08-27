import React, { useState, useHistory } from "react";
import styled from "styled-components";

function Login({user, setUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // let history = useHistory();

function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        username,
        password
    })
    }).then((res) => {
    if (res.ok) {
        res.json().then((user) => setUser(user));
    }
    })
    // history.push("/")
    }

return (
    <div>
    <LoginForm onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
    </LoginForm>
    <div>
    { user ? <h1>Welcome, {user.username}!</h1> : <h1>Please Login to Add Favorites!</h1> }
        
       
    </div>
    </div>
);
}

// Styled components

const LoginForm = styled.form`
    display: grid;
    width: 50pt;
    padding-left: 45%;
`
    
    
    export default Login