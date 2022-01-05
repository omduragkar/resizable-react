import axios from 'axios'
import { ANCF, ANCR, ANCS } from '../constants/contents';
import { ULS } from '../constants/userConstants';

export const addnewtocontent = (content) => async (dispatch)=>{
    try{
        dispatch({type:ANCR})
        const config ={
            headers: {
                'Content-Type': 'application/json'
            },
        };
        // console.log(x)
        console.log(content);
        console.log("using axios");
        const data = await axios.post("/api/add",content, config);
        localStorage.setItem("userInfo", JSON.stringify(data));
        dispatch({
            type: ULS,
            payload: data.data
        })

        dispatch({
            type: ANCS,
            payload: data.data.data.content
        })
    }catch(err){
        console.log(err);   

        dispatch({
            type: ANCF,
            payload: "Unable to get",
        });
    }
}
export const updateContent = (content) => async (dispatch)=>{
    try{
        dispatch({type:ANCR})
        const config ={
            headers: {
                'Content-Type': 'application/json'
            },
        };
        // console.log(x)
        console.log(content);
        console.log("using axios");
        const data = await axios.post("/api/update",content, config);
        localStorage.setItem("userInfo", JSON.stringify(data));
        dispatch({
            type: ULS,
            payload: data.data
        })

        dispatch({
            type: ANCS,
            payload: data.data.data.content
        })
    }catch(err){
        console.log(err);   

        dispatch({
            type: ANCF,
            payload: "Unable to get",
        });
    }
}