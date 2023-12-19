import React, { useEffect, useState } from 'react';
import './SinglePage.scss'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function SinglePage() {
  let navigate=useNavigate();
  let url ="https://6564d612ceac41c0761ee71f.mockapi.io/kinolar";
  let paramm=useParams().id;
  const [oneData,setoneData]=useState({});
  const handleDelete=()=>{
    let sorov=window.confirm("O'chirilsinmi?");
    if(sorov){
      axios.delete(url+"/"+paramm).then((result)=>{
        if(result.status===200){
          setTimeout(() => {
            navigate("/home")
          }, 1000);
        }
      })
    }else{

    }
  }
  async function getOneData() {
    await axios.get(url+"/"+paramm).then((result)=>{
      setoneData(result.data)
    })
  } 
 
  useEffect(()=>{
    getOneData();
  },[]);

  return (
    <div className='SinglePage'>
     <div className="singleCard">
           <div className="card">
           <h1>{oneData.catigory}
           <IconButton className='editButton' onClick={()=>{
            navigate("/singlePageEdit/"+oneData?.id)
           }}> 
            <EditIcon/>
           </IconButton>
           <IconButton className='deleteButton' onClick={handleDelete} aria-label="delete">
           <DeleteIcon />
           </IconButton></h1>
           <img src={oneData?.img} alt="" />
           <h2>{oneData?.title}</h2>
           <p>{oneData?.describtion}</p>
           </div>
       </div>
    </div>
  )
}
export default SinglePage;