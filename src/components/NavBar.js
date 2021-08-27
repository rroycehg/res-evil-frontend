import { Link, NavLink, useHistory } from "react-router-dom"
import styled from "styled-components";

function NavBar({ user, setUser }) {

let history = useHistory();

function handleLogoutClick() {
    fetch("http://localhost:3000/logout", { method: "DELETE" }).then((res) => {
        if (res.ok) {
        setUser(null);
        }
    });
    history.push("/login");
    }
    

    return(

        <LinksDiv>
            <h1>Resident Evil Wiki</h1>
            <SpanLinks>
                <NavLink exact to="/">Home</NavLink>
            </SpanLinks>
            <SpanLinks>
                {user ? (
                <NavLink to="/favorites">My Favorites</NavLink>
                ) : (
                <NavLink to="/login">My Favorites</NavLink>
                )}
            </SpanLinks>
            <SpanLinks>
                {user ? (
                    <button onClick={handleLogoutClick}>Logout</button>
                    ) : (
                    <>
                    <SpanLinks>
                        <Link to="/signup">Signup</Link>
                    </SpanLinks>
                    <SpanLinks>
                        <Link to="/login">Login</Link>
                    </SpanLinks>
                    </>
                )}
            </SpanLinks>
        </LinksDiv>
    )
}

// Styled Components

const LinksDiv = styled.div`
    color: white;
    width: 100%;
    background-color: black;
    padding-bottom: 3%;
`

const SpanLinks = styled.span`
    font-size: 18pt;
    color: yellow;
    width: 100%;
    display: inline;
    padding-right: 5%;
    padding-left: 5%;
    padding-top: 10%;
`


export default NavBar