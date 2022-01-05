import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
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
        <div style={{"width":"50%", "margin":"10% auto", "height":"70rem"}}>
            <h3 style={{"fontSize":"30px"}}>Sign up</h3>
            {userm.error?<h3 style={{"color":"red"}}>Error</h3>:<></>}
            {userm.loading?
                <div>
                    {userm.loading?<h3>Loading...</h3>:<></>}
                </div>
            :
            <div>
                
                <div style={{"margin":"5px", "padding":"5px"}}>
                    <input style={{"fontSize":"20px", "width":"65%"}} type="text" value={user.name || ""} onChange={(e)=>{change(e)}} name="name" placeholder="enter you name" />
                </div>
                <div style={{"margin":"5px", "padding":"5px"}}>
                    <input style={{"fontSize":"20px", "width":"65%"}} type="text" value={user.email || ""} onChange={(e)=>{change(e)}} name="email" placeholder="enter you email" />
                </div>
                <div style={{"margin":"5px", "padding":"5px"}}>
                    <input style={{"fontSize":"20px", "width":"65%"}} type="password" value={user.password || ""} onChange={(e)=>{change(e)}} name="password" placeholder="enter password" />
                </div>
                <div style={{"margin":"5px", "padding":"5px"}}>
                    <input style={{"fontSize":"20px", "width":"65%"}} type="password" value={user.confirmpassword || ""} onChange={(e)=>{change(e)}} name="confirmpassword" placeholder="confirm your password by typing password once again" />
                </div>
                <div style={{"margin":"5px","fontSize":"15px", "padding":"5px"}}>
                    <button type="submit" onClick={(e)=>{sub(e)}}>Signup</button>
                    <Link to="/user/login" style={{"margin":"15px"}}>Login</Link>
                </div>
            </div>
            }
        </div>
    )
}

export default Signup
