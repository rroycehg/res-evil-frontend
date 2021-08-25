import React, { useState } from "react";
import styled from "styled-components";

function Signup({setUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            password_confirmation: passwordConfirmation,
          }),
        })
    .then((r) => {
        if (r.ok) {
          r.json().then(user => setUser(user));
        }
      });
      }



return(
    <div>
        <SignupForm onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
        />
        <button type="submit">Sign Up</button>
      </SignupForm>
    </div>
)
}


// Styled components

const SignupForm = styled.form`
    display: grid;
    width: 50pt;
    padding-left: 45%;
`

export default Signup