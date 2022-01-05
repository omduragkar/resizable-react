import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { register } from '../../redux/actions/userActions';
const Signup = () => {
    const [user, setUser] = useState({});
    const change = (e)=>{
        // console.log(user);
        setUser({...user, [e.target.name]:e.target.value});

    }
    const dispatch = useDispatch();
    const sub= (e)=>{
        e.preventDefault();
        console.log(user);
        dispatch(register(user));
    }
    const history = useHistory();
    const userm = useSelector(state => state.user)
    useEffect(() => {
        if(userm.userinfo && userm.userinfo._id){
            history.push("/");
        }
    }, [history, userm]);
    return (
        <div>
            <h3>Sign up</h3>
            <input type="text" value={user.name || ""} onChange={(e)=>{change(e)}} name="name" placeholder="enter you name" />
            <input type="text" value={user.email || ""} onChange={(e)=>{change(e)}} name="email" placeholder="enter you email" />
            <input type="password" value={user.password || ""} onChange={(e)=>{change(e)}} name="password" placeholder="enter password" />
            <input type="password" value={user.confirmpassword || ""} onChange={(e)=>{change(e)}} name="confirmpassword" placeholder="confirm your password by typing password once again" />
            <button type="submit" onClick={(e)=>{sub(e)}}>Signup</button>
        </div>
    )
}

export default Signup
