import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateContent } from '../../redux/actions/contents';

const Update = () => {
    const user = useSelector(state => (state.user.userinfo?(state.user.userinfo.data?state.user.userinfo.data:state.user.userinfo):state.user));
    // const addnewContent = useSelector(state => state.addnewContent);
    const [addc, setAddc] = useState({});
    const [upc, setupc] = useState({});
    let y = user.content && (user.content[user.content.length - 1].id + 1)
    const [l, setl] = useState(y);
    let z = user.content?user.content:[]
    const [addUser, setAddUser] = useState([...z]);
    const dispatch = useDispatch(); 
    const changeco = (e)=>{
        let ind = e.target.name;
        let x = user.content[e.target.parentNode.getAttribute("pd")];
        x[ind] = e.target.value;
        setupc({...upc, ...x});
    }
    const addco = (e)=>{
        setAddc({...addc, [e.target.name]:e.target.value, id:l});
        
    }
    const applist=async ()=>{
        setl(l + 1);
        setAddc({...addc, id:l})
        if(addc.id != null){
            setAddUser([...addUser, addc]);
            setAddc({});
        }
        else{

        }
    }
    const updateFinal = ()=>{
    

        let finobj = {content:addUser, id:user._id};
        dispatch(updateContent(finobj));
        setAddUser([...user.content]);
        

    }
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>City</th>
                </tr>
                </thead>
                <tbody>
                    {user.content && user.content.map((v, i)=>(
                        <tr>
                            <td pd={i}><input name="name" onChange={(e)=>{changeco(e)}} value={ v.name}></input></td>
                            <td pd={i}><input name="contact" onChange={(e)=>{changeco(e)}} value={ v.contact}></input></td>
                            <td pd={i}><input name="city" onChange={(e)=>{changeco(e)}} value={ v.city}></input></td>                            
                        </tr>
                    ))}
                    Addition:
                    <tr>
                        <td ><input name="name" onChange={(e)=>{addco(e)}} value={addc.name || ""}></input></td>
                        <td ><input name="contact" onChange={(e)=>{addco(e)}} value={addc.contact || ""}></input></td>
                        <td ><input name="city" onChange={(e)=>{addco(e)}} value={addc.city || ""}></input></td>                            
                    </tr>
                    <button onClick = {applist}>add to List</button>
                </tbody>
            </table>
            <button onClick={updateFinal}> Update Final</button>
        </div>
    )
        
}

export default Update;
