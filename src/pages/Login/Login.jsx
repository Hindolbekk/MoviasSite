import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import LoginImg from '../../Asets/Img/loginRasm.svg'
import './Login.scss'
import { useNavigate } from 'react-router-dom';
function Login() {
  let navigate=useNavigate()
  const [loading, setLoading] = useState(false);
  let [phone,setPhone]=useState("");
  let [parol,setParol]=useState("");
  let PhoneNumber="+998931336461";
  let Parol="frontend1"
  function handleClick() {
    setLoading(true);
    if(PhoneNumber===phone && Parol===parol){
      navigate('/home');
    }else{
      navigate('/');
    }
  }
  return (
    <div className='Login'>
        <div className="LoginCheck">
            <h2>Welcome</h2>
            <p>Let’s log you in quickly</p>
            <TextField onChange={(e)=>setPhone(e.target.value)}  className='inp' id="standard-basic" label="Enter your phone" variant="standard" />
            <TextField onChange={(e)=>setParol(e.target.value)}  className='inp' id="standard-basic" label="Enter your parol" variant="standard" />
            <LoadingButton className='loadingButton'
              onClick={handleClick}
              loading={loading}
              loadingPosition="end"
              variant="contained"
             ><span>Check</span>
            </LoadingButton>
        </div>
        <img className="loginImg" src={LoginImg} alt="login img" />
    </div>
  )
}

export default Login