import { NavLink } from "react-router-dom"
import styled from "styled-components";

function NavBar() {

    return(

        <LinksDiv>
            <h1>Resident Evil Wiki</h1>
            <SpanLinks>
                <NavLink exact to="/">Home</NavLink>
            </SpanLinks>
            <SpanLinks>
                <NavLink to="/favorites">My Favorites</NavLink>
            </SpanLinks>
            <SpanLinks>
                <NavLink to="/login">Login</NavLink>
            </SpanLinks>
            <SpanLinks>
                <NavLink to="/signup">Sign Up</NavLink>
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