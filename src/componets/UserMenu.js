import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavLink, NavItem, Button } from 'reactstrap';
import { logout } from '../redux/actions';

const UserMenu = () => {

    const currentUser = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const dispatchLogout = async () => {
        await dispatch(logout());
        window.location = "/";
    }

    return <>
        <NavLink
            tag={RRNavLink}
            exact to="/profile">
            <div className="d-flex align-items-center ml-3 text-white">
                <i className="fa fa-user-circle-o mr-2" aria-hidden="true"></i>
                <div>{currentUser.firstName} {currentUser.lastName}</div>
            </div>
        </NavLink>
        <NavItem>
            <NavLink
                tag={RRNavLink}
                exact
                to="gamestore"
                activeClassName="active"
            >Game Store</NavLink>
        </NavItem>
        <Button type="button" onClick={dispatchLogout} className="user-button">Logout</Button>
    </>





}

export default UserMenu;