import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addnewtocontent } from '../../redux/actions/contents';
const AddUser = (props) => {    
    // let i = 0;
    const user = useSelector(state => (state.user.userinfo?(state.user.userinfo.data?state.user.userinfo.data:state.user.userinfo):state.user));
    const [addc, setAddc] = useState({});
    const [addUser, setAddUser] = useState([]);
    const [id, setId] = useState(1);
    const dispatch = useDispatch();
    const changeco = (e)=>{
        // let id = e.target.parentNode.parentNode.getAttribute("id");?
        setAddc({...addc, [e.target.name]:e.target.value,});
    }
    const addtoarr = ()=>{
        
        let lid = id + 1;
        if(id !=lid){

            setId(lid);
            setAddc({...addc, id:lid});
            setAddUser([...addUser, addc]);
        }
        else{
            lid = id + 1;
            setId(lid);
            setAddc({...addc, id:lid});
            setAddUser([...addUser, addc]);
        }
    }
    const changes = ()=>{
        addUser[0].id = 1;
        let findata = {content:[...addUser], id:user._id}
        dispatch(addnewtocontent(findata));
        setAddUser([]);
        setAddc({});
    }
    return (
        <div>
            {props.open === false?
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
                            <tr>
                                <td><input name="name" onChange={(e)=>{changeco(e)}} value={addc.name || ""}></input></td>
                                <td><input name="contact" onChange={(e)=>{changeco(e)}} value={addc.contact || ""}></input></td>
                                <td><input name="city" onChange={(e)=>{changeco(e)}} value={addc.city || ""}></input></td>                            
                            </tr>
                        </tbody>
                        <button onClick={addtoarr}>Add New</button>
                    </table>
                </div>
            :
            <></>
            }
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
                        {addUser?addUser.map(v=>(

                            <tr>
                                <td>{v.name}</td>
                                <td>{v.contact}</td>
                                <td>{v.city}</td>                            
                            </tr>
                        ))
                        :
                        <></>
                    }
                    </tbody>
                </table>
                <button onClick={changes}>Change</button>
            </div>
        </div>
    )
}
export default AddUser
    
    
    //     let  i = 0;
    //     const addtrue = (e)=>{
    //         e.preventDefault();
    //         setSetCon({...setCon, id:i})
    //         i+=1;
    //         setAddnew([...addnew, setCon]);
    //         setSetCon({});
    //     }
    //     const dispatch = useDispatch();
    
    //     const addtoContent = ()=>{
    //         console.log(addnew);
    //         let necontent = { content:addnew, id:user._id};
    //         dispatch(addnewtocontent(necontent));
    
    //     }
    //     const updateb = async ()=>{
    //         if(addt === true){
    //             console.log(updatearr);
    //             setAddt(false);
    //             setUpdatebool(true);
    //             setUpdatearr([...user.content]);
    //             setSetCon({});
    //         }else{
                
    //             console.log(updatearr);
    //             setSetCon({});
    //             setUpdatebool(true);
    //             console.log(updatebool + " " + addt);
    //         }
    //     }
    //     const setw = (e)=>{
    //         console.log(e.target.name);
    //         console.log(e.target.value);
    //         setSetCon({
    //             ...setCon,
    //             [e.target.name]:e.target.value
    //         })
    //         console.log(setCon);
    //     }
    //     const updatew = (e)=>{
    //         let str = (e.target.parentNode.parentNode.getAttribute("id"));
    //         str = str.split("-")[1];
    //         // console.log(str);
    //         let val = user.userinfo?user.userinfo.content[str]:user.content[str];
    //         // console.log(val);
    //         val[e.target.name] = e.target.value;
    //         setUpdateCon({...updateCon,val});
    //         console.log(updateCon);
    //     }
    //     // const addMore = (e)=>{
    //     //     setUpdatearr1([...updatearr1, updateCon]);
    //     //     setUpdateCon({});
            
    //     // }
    //     const updateTask = ()=>{
    //         console.log(updatearr1);
    //         console.log(updatearr);
    //     }
    //     return (
    //         <div className="btn-upper1">
    //             {addt === true?
    //                     <div>
    //                         <table>
    //                             <tr>
    //                                 <th>Name</th>
    //                                 <th>Contact</th>
    //                                 <th>City</th>
    //                             </tr>
                                
    
    //                             <tr>
    //                                 <td><input name="name" value={ setCon.name|| ""} onChange={(e)=>{setw(e)}} type="text" required></input></td>
    //                                 <td><input name="contact" value={setCon.contact|| ""} onChange={(e)=>{setw(e)}} type="text" required></input></td>
    //                                 <td><input name="city" value={ setCon.city|| ""} onChange={(e)=>{setw(e)}} type="text" required></input></td>
    //                                 <input value={i+=1} style={{"display":"none"}}></input>
    //                                 <td>
    //                                     <button type='submit' onClick={(e)=>{addtrue(e)}} >More</button>
    //                                 </td>
    //                             </tr>
    //                         </table> 
                    
    //                         <div>
    //                             <h2>Will be Added:</h2>
    //                             {addnew.length!==0?
    //                                 <table>
    //                                     {addnew.map((v, i)=>(
    //                                         <tr>
    //                                             <td>{v.name}</td>
    //                                             <td>{v.contact}</td>
    //                                             <td>{v.city}</td>
    //                                         </tr>
    //                                     ))}
    //                                 </table>
    //                                 :
    //                                 <></>
    //                             }   
    //                         </div>
    //                         <button onClick={addtoContent}>Add</button>
    //                     </div>
    //                 :
    //                 updatebool?
    //                     <table>
    //                         <tr>
    //                             <th>Name</th>
    //                             <th>Contact</th>
    //                             <th>City</th>
    //                         </tr>
    //                             {user.content?user.content.map((v, i)=>(
    //                             <tr id={`up-${i}`}>
    
    //                                 <td><input name="name" value={v.name} onChange={updatew}></input></td>
    //                                 <td><input name="contact" value={v.contact}></input></td>
    //                                 <td><input name="city" value={v.city}></input></td>
    //                             </tr>
    //                             ))
    //                         :<></>
    //                         }
    
    //                         <button onClick={updateTask}>Update Table</button>
    //                     </table>
    //                 :
    //                 <div>
    
    //                 </div>
    
    //             }
    //         </div>
    //     )
    // }