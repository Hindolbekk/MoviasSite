import React, { useEffect, useState } from 'react'
import './Home.scss'
import MovieIcon from '@mui/icons-material/Movie';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Home() {
  const [hammasi,setHammasi]=useState(true);
  const [animal,setAnimal]=useState(false);
  const [sport,setSport]=useState(false);
  function hammasiFc(){
    setHammasi(true);
    setAnimal(false);
    setSport(false);
  }
  function animalFc(){
    setHammasi(false);
    setAnimal(true);
    setSport(false);
  }
  function sportFc(){
    setHammasi(false);
    setAnimal(false);
    setSport(true);
  }
  const navigate=useNavigate();
  let url ="https://6564d612ceac41c0761ee71f.mockapi.io/kinolar";
  const [data,setData]=useState([]);
  const getData=()=>{
    axios.get(url).then((result)=>{
      setData(result.data)
    })
  }
  function NavigateAdd() {
      setTimeout(() => {
        navigate('/add')
      }, 1000); 
  } 
  function NavigateLogin() {
    setTimeout(() => {
      navigate('/login')
    }, 1000); 
} 
  useEffect(()=>{
  getData()
  },[])
  return (
    <div className='Home'>
      <div className="headerHome">
        <MovieIcon className='moviaIcon'/><h5>Movia</h5>
        <ul>
          <Button className='kat' onClick={hammasiFc} >all</Button>
          <Button className='kat'  onClick={animalFc} >animals</Button>
          <Button className='kat'  onClick={sportFc}  >sport</Button>
        </ul>
      <button className='btnAdd' onClick={NavigateLogin}>login</button>
      <button className='btnLogin' onClick={NavigateAdd}>add</button>
      </div>
       <div className="kinolar">
        <div className="cards">{
          data?.map((item,index)=>{
           if(hammasi==true){
            return(
              <div className="card" key={item.id} onClick={()=>{navigate("/singlePage/"+item.id)}}>
              <h1>{item.catigory}</h1>
           <img src={item.img} alt="" />
           <h2>{item.title}</h2>
           <p>{item.describtion}</p>
              </div>
            )
           }else if(animal==true && item.catigory=="Animals"){
            return(
              <div className="card" key={item.id} onClick={()=>{navigate("/singlePage/"+item.id)}}>
              <h1>{item.catigory}</h1>
           <img src={item.img} alt="" />
           <h2>{item.title}</h2>
           <p>{item.describtion}</p>
              </div>
            )
           }else if(sport==true && item.catigory=="Sport"){
            return(
              <div className="card" key={item.id} onClick={()=>{navigate("/singlePage/"+item.id)}}>
              <h1>{item.catigory}</h1>
           <img src={item.img} alt="" />
           <h2>{item.title}</h2>
           <p>{item.describtion}</p>
              </div>
            )
           }
          })
        }</div>
       </div>
    </div>
  )
}

export default Home;