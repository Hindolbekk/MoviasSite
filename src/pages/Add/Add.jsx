import './Add.scss'
import React, { useState } from 'react'
;
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Select as BaseSelect, selectClasses } from '@mui/base/Select';
import { Option as BaseOption, optionClasses } from '@mui/base/Option';
import { Popper as BasePopper } from '@mui/base/Popper';
import { styled } from '@mui/system';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import axios from 'axios';
function Add() {
  const Select = React.forwardRef(function CustomSelect(props, ref) {
    const slots = {
      root: StyledButton,
      listbox: Listbox,
      popper: Popper,
      ...props.slots,
    };
  
    return <BaseSelect {...props} ref={ref} slots={slots} />;
  });
  
  Select.propTypes = {
    /**
     * The components used for each slot inside the Select.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    slots: PropTypes.shape({
      listbox: PropTypes.elementType,
      popper: PropTypes.func,
      root: PropTypes.elementType,
    }),
  };
  
  const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    900: '#003A75',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  
  const Button = React.forwardRef(function Button(props, ref) {
    const { ownerState, ...other } = props;
    return (
      <button type="button" {...other} ref={ref}>
        {other.children}
        <UnfoldMoreRoundedIcon />
      </button>
    );
  });
  
  Button.propTypes = {
    children: PropTypes.node,
    ownerState: PropTypes.object.isRequired,
  };
  
  const StyledButton = styled(Button, { shouldForwardProp: () => true })(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-width: 320px;
    padding: 8px 12px;
    border-radius: 8px;
    text-align: left;
    line-height: 1.5;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    position: relative;
    box-shadow: 0px 2px 4px ${
      theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };
  
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }
  
    &.${selectClasses.focusVisible} {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
    }
  
    & > svg {
      font-size: 1rem;
      position: absolute;
      height: 100%;
      top: 0;
      right: 10px;
    }
    `,
  );
  
  const Listbox = styled('ul')(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 320px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    box-shadow: 0px 2px 4px ${
      theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };
    `,
  );
  
  const Option = styled(BaseOption)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionClasses.highlighted} {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${optionClasses.highlighted}.${optionClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionClasses.disabled}) {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `,
  );
  
  const Popper = styled(BasePopper)`
    z-index: 1;
  `;
  const navigate=useNavigate();
  let url ="https://6564d612ceac41c0761ee71f.mockapi.io/kinolar";
    const [title,setTitle]=useState("");
    const [imgUrl,setImgUrl]=useState('');
    const [desc,setDesc]=useState('');
    const [catigory,setCatigory]=useState('');
    async function handlePost(){
     let data={
      img:imgUrl,
      title:title,
      describtion:desc,
      catigory:catigory
     }
    await axios.post(url,data).then((resul)=>{
          navigate("/home")
     })
    }
  return (
    <div className="Add">
     <div className="AddInner">
     <h2>Welcome</h2>
      <p>add your blog</p>
      <div className="form">
      <ul>
       <TextField onChange={(e)=>setTitle(e.target.value)} className='inp' id="standard-basic" label="Enter Title" variant="standard" />
       <TextField onChange={(e)=>setImgUrl(e.target.value)} className='inp' id="standard-basic" label="Enter Url Address Image" variant="standard" />
       <TextField onChange={(e)=>setDesc(e.target.value)} className='inp' id="standard-basic" label="Enter Description" variant="standard" />
        </ul>
        <Select className="section" defaultValue={"Catigory"}>
        <Option  value={"Catigory"}>Select Catigory</Option>
      <Option onClick={()=>setCatigory("Sport")} value={"Sport"}>Sport</Option>
      <Option onClick={()=>setCatigory("Animals")}value={"Animals"}>Animals</Option>
    </Select>
     <button onClick={handlePost} className='addButton'>add</button>
      </div>
     </div>
    </div>
  )
}

export default Add