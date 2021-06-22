import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.mainColor};
    }
`;

export const NavStyled = styled.nav`
background-color: ${(props) => props.theme.backgroundColor};
`;

export const NavLinkStyled = styled(NavLink)`
text-align: center;
margin: 1.25em;
padding:1em 1em;
padding-left:3%;
padding-right:3%;
border-radius: 30px;
font-size:130%;
margin-left: 500px;
margin-right: 820px;
border: 3px solid #808080;
background-color:${(props) => props.theme.mainColor} ;

&.active{
  color: ${(props) => props.theme.red};
}
`;

export const Logo = styled(Link)`
padding: 1em;

img{
  width:8rem;
}
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-style:italic;
  font-size:75px;
  margin-top: -25px;
  padding-top: 2%;
  margin-left: 300px;

`;

export const Description = styled.h4`
  font-style:italic;
  text-align: center;
  margin-top: -30px;
  margin-bottom:30px;
  padding-top:3%;
`;

export const MovieImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:45%;
  margin-bottom:40px;
  border: 3px solid #808080;
  border-radius: 30px;
`;

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MovieWrapper = styled.div`
  padding-top: 70px;
  margin: 10px;
  img {
    border: 3px solid #000000;
    width: 220px;
    height: 300px;
    border-radius: 10px;
  }
  p {
    text-align: center;
    font-weight: bold;
    font-style: oblique;
    
  }
`;

export const ThemeButton = styled.button`
font-size:1em;
margin: 1.25em;
padding:1.25em 1em;
padding-left:3%;
padding-right:3%;
border-radius: 30px;
background-color:${(props) => props.theme.mainColor} ;
color:${(props) => props.theme.backgroundColor} ;
margin-left:50px;
`;

export const SearchBarStyled = styled.input`
margin: 1rem auto;
padding:0.5rem;
display:block;
width: 40%;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
    margin-right: 20px;
  }
  p {
    vertical-align: middle;
    font-weight: bold;
    font-style: oblique; 
    font-size:170%;
  }
`;