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
import UserMenu from '../componets/UserMenu';

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
        return <Navbar className="navbar" dark expand="md" >
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
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact
                                to="arcadegames"
                                activeClassName="active"
                            >Arcade Games</NavLink>
                        </NavItem>
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
                            </>
                        ) : (
                                <>
                                    <Register buttonLabel="Register" />
                                    <Login buttonLabel="Login" />
                                </>
                            )}
                    </Nav>
                </Collapse>
            </div>
            <div className="alpha">Technical alpha</div>
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