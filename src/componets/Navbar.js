import React, { useState, Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

import Register from '../componets/Register'
import Login from '../componets/Login';
import UserMenu from '../componets/Register';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from '../redux/actions';

class HeaderNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    componentDidMount = () => {
        this.props.getCurrentUser();
    }

    render() {
        return <Navbar color="dark" dark expand="md" >
            <div className="container">
                <NavbarToggler onClick={this.toggleIsOpen} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact
                                to="/"
                                activeClassName="active"
                            >Home</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact
                                to="login"
                                activeClassName="active"
                            >Login</NavLink>
                        </NavItem> */}
                        {/* <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact
                                to="arcadegames"
                                activeClassName="active"
                            >Arcade Games</NavLink>
                        </NavItem> */}
                        {/* <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact
                                to="gamestore"
                                activeClassName="active"
                            >Game Store</NavLink>
                        </NavItem> */}
                        {/* <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/protected"
                            activeClassName="active">
                            Protected
                        </NavLink>
                    </NavItem> */}
                        {this.props.token !=='' ? (
                            <>
                            <UserMenu />
                            <div>vlizam</div>
                            </>
                        ) : (
                                <>
                                    {/* <Register buttonLabel="Регистрирай се" /> */}
                                    <Login buttonLabel="Влез" />
                                </>
                            )}
                    </Nav>
                    {/* <img src="https://fontmeme.com/permalink/200305/2a4c7ace6f854ee4dc881c094be7db12.png" alt="" /> */}
                </Collapse>
            </div>
        </Navbar>
    };
}

const mapStateToProps = state => {
    return {
        token: state.token,
    }
};

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        getCurrentUser: actions.getCurrentUser,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(HeaderNavbar);