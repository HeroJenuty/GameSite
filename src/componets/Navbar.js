import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const HeaderNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md">
            <div className="container">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact
                                to="/"
                                activeClassName="active"
                            >Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact
                                to="arcadegames"
                                activeClassName="active"
                            >Arcade Games</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact
                                to="gamestore"
                                activeClassName="active"
                            >Game Store</NavLink>
                        </NavItem>
                    </Nav>
                    <img src="https://fontmeme.com/permalink/200305/2a4c7ace6f854ee4dc881c094be7db12.png" alt=""/>
                </Collapse>
            </div>
        </Navbar>
    );
}

export default HeaderNavbar;