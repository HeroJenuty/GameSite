import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';

const RegisterForm = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatchLogin = async () => {
        await dispatch(login({
            email,
            password,
        }));
        window.location = "/";
    }

    return <form>
        <div className="form-group">
            <label htmlFor="login-email">Email</label>
            <input
                type="text"
                className="form-control"
                onChange={e => setEmail(e.target.value)}
                id="login-email"
                placeholder="Enter email" />
        </div>
        <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input
                type="password"
                className="form-control"
                onChange={e => setPassword(e.target.value)}
                id="login-password"
                placeholder="Enter password" />
        </div>
        <button type="button" className="login-button" onClick={dispatchLogin}>Enter</button>
    </form>
}

export default RegisterForm;