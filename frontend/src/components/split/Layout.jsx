import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Split from "react-split"
import "./layout.css"
import { useHistory } from 'react-router-dom';
import Update from '../updateContent/Update';
import AddUser from '../adduser/AddUser';
import { userLogout } from '../../redux/actions/userActions';
const Layout = () => {
    const user = useSelector(state => (state.user.userinfo?(state.user.userinfo.data?state.user.userinfo.data:state.user.userinfo):state.user));
    // console.log(user);
    // state.user.userinfo?state.user.userinfo.data?state.user.userinfo.data:state.user.userinfo:user.userinfo
    // const addnewtocontentstorage = useSelector(state => state.addnewtocontent)
    const history = useHistory();
    const [addupbool, setAddupbool] = useState(false);
    const addtf = (e)=>{
        if(e.target.innerHTML === "Update"){
            setAddupbool(true);
        }
        else{
            setAddupbool(false);
        }
    }
    const addnewContent = useSelector(state => state.addnewContent);
    useEffect(() => {
        if(user && user.userinfo === null ){
            history.push("/user/login");
        }
    }, [history, user, addnewContent])
    
    const dispatch = useDispatch({});
    const log = ()=>{
        dispatch(userLogout());
    }
    return (
        <Split direction='vertical' sizes={[50, 50]} className="splitmain">
            <Split className='splitupper' sizes={[10, 90]} minSize={[140,450]}>
                <div style={{"backgroundColor":"#a2a2a2"}}>
                    <h1>Welcome</h1>
                    <h2>Total Hits: </h2>
                    <p>CREATE: {user.counter?user.counter.create:<></>}</p>
                    <p>UPDATE: {user.counter?user.counter.update:<></>}</p>
                    <button onClick={log}>Logout</button>
                </div>
                <div style={{"backgroundColor":"#c4c4c4", "overflowY":"scroll", padding:"1%"}}>
                    <h2 className="upperdiv2h">Tables</h2>
                    <div>
                        <button onClick={(e)=>{addtf(e)}}>Add</button>
                        <button onClick={(e)=>{addtf(e)}}>Update</button>
                    </div>
                    {console.log(addupbool)}
                    {addupbool?
                        <Update />
                        :
                        <AddUser open={addupbool?null:false}/>
                    }
                </div>
            </Split>
            <div style={{"backgroundColor":"gray"}}>
                {
                    addnewContent && addnewContent.loading?
                        <h2>Loading</h2>
                    :
                    <div className='tabledown'>
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>City</th>
                            </tr>
                            {
                                user.content && user.content.map(v=>(
                                    <tr>
                                        <td>{v.name}</td>
                                        <td>{v.contact}</td>
                                        <td>{v.city}</td>
                                    </tr>
                                ))
                            }
                            
                        </table>
                    </div>
                }   
            </div>
        </Split>
    ) 
}

export default Layout;
