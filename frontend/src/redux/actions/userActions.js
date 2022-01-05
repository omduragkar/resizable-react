import axios from 'axios'
import {UL, ULF, ULR, ULS, URF, URR, URS} from '../constants/userConstants';
export const userLogin = (user) => async (dispatch)=>{
    const { email, password } = user;
    try{
        dispatch({type:ULR})
        const config ={
            headers: {
                'Content-Type': 'application/json'
            },
        };
        let x={
            email, password
        }
        // console.log(x)
        console.log("using axios");
        const data = await axios.post("/api/join",x, config);
        dispatch({type: ULS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    catch(err)
    {   
        console.log(err);
        dispatch({
            type: ULF,
            payload: err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
        });
    }
};


export const userLogout = ()=>(dispatch)=>{
    localStorage.clear("userInfo");
    dispatch({type:UL, payload:{}})
}



export const register = (user)=> async (dispatch)=>{
    const { email, password, confirmpassword, name } = user;
    try{
        dispatch({type:URR})
        const config ={
            headers: {
                'Content-Type': 'application/json'
            },
        };
        let x={
            email,
            password,
            confirmpassword, 
            name
        }
        console.log("using axios");
        const data = await axios.post("/api/create",x, config);
        dispatch({type: URS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    catch(err)
    {
        console.log(err);
        dispatch({
            type: URF,
            payload: err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
        });
    }


}