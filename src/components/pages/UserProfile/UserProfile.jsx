import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import routes from '../../routes';
import { log_out } from '../../store/actions';
import "./profile.css"
import { BiHomeCircle, BiLogOutCircle } from 'react-icons/bi'

const UserProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const currentUser = useSelector(state => state.currentUser)
    const info = useSelector(state => state.info)
    return (
        <div className='profile'>
            <div className='empty__block'><div className="welcome">Welcome <span className="user__name"> {currentUser.firstName}</span></div>
                <div className='divForImg'></div></div>
                
            <div className='profile__user'>
                <div className='user__item'>
                <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" alt="" />
                <div>
                    <p className='p1'> {currentUser.firstName} {" "} {currentUser.lastName}</p>
                    <p className='p2'>{currentUser.userEmail}</p>
                    </div>
                    <div className='user__btn'>
                <button className='btn-user' onClick={() => {
                    history.push(routes.home)
                }}><div style={{color: 'green', fontSize: 20}}><BiHomeCircle/></div> Go Home</button>
                <button className='btn-user' onClick={() => {
                dispatch(log_out(history.push(routes.home)))
                }}><div style={{color: 'red', fontSize: 20, marginTop: 5}}><BiLogOutCircle/></div> Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile