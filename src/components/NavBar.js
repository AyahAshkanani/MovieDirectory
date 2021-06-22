import logo from "../logo.png";
import { ThemeButton,NavLinkStyled, Logo , NavStyled, Title} from "../styles";

const NavBar = (props) => {
    return (
    <NavStyled className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Logo to ="/" classNameName="navbar-brand">
                <img alt="" src={logo} width="100"/>
                </Logo>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <ThemeButton onClick={props.toggleTheme} className="nav-item">
                {props.currentTheme === "light"? "Dark":"Light"} mode
                </ThemeButton>
                <Title className="text">MOVIES</Title>
                <NavLinkStyled to="/list" className="nav-item">
                List
                </NavLinkStyled>
            </ul>
            </div>
        </div>
    </NavStyled>
);
};

export default NavBar
