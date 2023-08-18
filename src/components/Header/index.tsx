import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { PathRoute } from '../../constants/router/path';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/Actions';

const Header = () => { 
//! define
const dispatch = useDispatch();


//! state

//! function
const handleLogout = () => {
    dispatch({type: actions.LOGOUT})
}

//! useEffect

//! render
return (
<Fragment>
    <Link to={PathRoute.Home}>Home</Link>
    <Link to={PathRoute.Login}>Login</Link>
    <div onClick={handleLogout}>Logout</div>
</Fragment>
)

}

export default Header
