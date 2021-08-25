import React, { useState } from 'react'
import { TextField } from '../../TextField'
import { Input, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import routes from '../../routes'
import { login_user } from '../../store/actions';
const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [inEmail, setInEmail] = useState('')
    const [inPassword, setInPassword] = useState('')

    const LoginIn = () => {
        dispatch(login_user({ inEmail, inPassword }))
        if(inEmail && inPassword){
            history.push(routes.user_profile)
        }
    }

    return (
        <div className='container bg-bl'>
            <div className="sign">
                <div className="empty_sign-page">
         <div className="img_title">New here?</div> 
         <p className="img_text">Sign up and discover great amount of new opportunities!</p>
        <span className='sign_link1'><Link to={routes.sign_up}>Sign Up </Link></span>
                </div>
                <div className="sign_user">
            <div className='sign_up-h1'>Sign In</div>
        <div className='first__input'>
        <TextField
            value={inEmail}
            onChange={(e) => setInEmail(e.target.value)}
            placeholder="Enter the Email"
            name="email" type="email"
          />
        </div>
        <div>
        <Space direction="vertical"
        className="password-inp">
            <Input.Password
            
            value={inPassword}
            onChange={(e) => setInPassword(e.target.value)}
            placeholder="At least 8 characters long"
            name="password"
            type="password" />
          </Space>
        </div>
        <span onClick={() =>LoginIn()} className='sign_link_2'>Sign In</span>
       
                </div>
            </div>
        </div>
    )
}

export default Login
