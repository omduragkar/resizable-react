import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
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
        if(userm.userinfo && userm.userinfo.data){
            history.push("/");
        }
    }, [history, userm]);
    return (
        <div style={{"width":"50%", "margin":"10% auto", "height":"70rem"}}>
            <h2>Sign in</h2>
            {userm.error?<h3 style={{"color":"red"}}>Error</h3>:<></>}
            {userm.loading ?
                <div>
                    {userm.loading?<h3>Loading...</h3>:<></>}
                </div>
            :
                <div>
                    <div>
                        <input style={{"padding":"10px", "fontSize":"15px"}} type="text" name="email" value={user.email || ""} onChange={(e)=>{change(e)}} placeholder="enter your email" />
                    </div>
                    <div>
                        <input style={{"padding":"10px", "fontSize":"15px"}} type="password" name="password" value={user.password || ""} onChange={(e)=>{change(e)}} placeholder="enter password" />
                    </div>
                    <button style={{"padding":"5px", "margin":"5px", "fontSize":"15px"}} type="submit" onClick={(e)=>{sub(e)}}>Login</button>
                    <Link to="/user/register">Signup</Link>
                </div>
            }

        </div>  
    )
}

export default Login
