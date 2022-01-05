import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { userLogin } from '../../redux/actions/userActions';

const Login = () => {
    const [user, setUser] = useState({});
    const change = (e)=>{
        // console.log(user);
        setUser({...user, [e.target.name]:e.target.value});

    }
    const dispatch = useDispatch();
    const history = useHistory();
    const userm = useSelector(state => state.user)
    const sub= (e)=>{
        e.preventDefault();
        console.log("login btn");
        console.log(user);
        dispatch(userLogin(user));
    }
    useEffect(() => {
        if(userm.userinfo && userm.userinfo._id){
            history.push("/");
        }
    }, [history, userm]);
    return (
        <div>
            <h3>Sign in</h3>
            {userm.loading?<h2>loading</h2>:<></>}
            {userm.error?<h2>{userm.error}</h2>:<></>}
            <input type="text" name="email" value={user.email || ""} onChange={(e)=>{change(e)}} placeholder="enter your email" />
            <input type="password" name="password" value={user.password || ""} onChange={(e)=>{change(e)}} placeholder="enter password" />
            <button type="submit" onClick={(e)=>{sub(e)}}>Login</button>
        </div>  
    )
}

export default Login
