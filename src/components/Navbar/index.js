// components/Navbar/index.js

import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    LogoLink
} from "./navbarElements";
const LogoComponent = () => (
  <img src="./images/logo.png" alt="Cyber Ignite" />
  // OR
  // <svg width="50" height="50"> {/* Your SVG code here */} </svg>
  // OR
  // <span>Your Logo Text</span>
);
const Navbar = () => {
    return (
        <>
            <Nav>

                <Bars />

                <NavMenu>
<LogoLink to="/"> {/* Link to your home page */}
          <LogoComponent />
        </LogoLink>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/programs" activeStyle>
                        Programs
                    </NavLink>
                    <NavLink to="/resources" activeStyle>
                        Resources
                    </NavLink>
                    <NavLink to="/Donate" activeStyle>
                        Donate
                    </NavLink>
                    <NavLink to="/Contact" activeStyle>
                        Contact
                    </NavLink>

                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
{/*                <NavBtn>
//                    <NavBtnLink to="/Contact">
//                        Contact
//                    </NavBtnLink>
//                </NavBtn>*/}
            </Nav>
        </>
    );
};

export default Navbar;
