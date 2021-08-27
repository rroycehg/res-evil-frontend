import React, { useState } from "react";

function Login({user, setUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

function handleSubmit(e) {
    e.preventDefault();
    console.log('i was clicked')
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
    }

return (
    <div>
    <form onSubmit={handleSubmit}>
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
    </form>
    <div>
    { user ? <h1>Welcome, {user.username}!</h1> : <h1>Please Login</h1> }
        
       
    </div>
    </div>
);
}
    
    
    export default Login