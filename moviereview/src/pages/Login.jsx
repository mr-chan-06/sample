import { useState } from 'react'
import Movies from './Movies'
import './login.css'
export default function Login()
{
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[logged,setLogged]=useState(false)
    function handleClick(){
        if(username ==='admin'&& password ==='admin123'){
            setLogged(true)
        }
        else{
            
            alert("Username or Password wrong")
        }
    }
    if(logged){
        return <Movies/>
    }
    return(
        <div className="container">
            <div className="card">
                <div className="chead">
                    <h2 className='tit'>LOGIN</h2>
                </div>
                <div className="cbody">
                    <input type="text" value={username} placeholder="Username" className="usn" onChange={(e)=>setUsername(e.target.value)} />
                    <input type="password" value={password} placeholder="Password" className="pass" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className='foot'>
                    <button className='but' onClick={handleClick}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}