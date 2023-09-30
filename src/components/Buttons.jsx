import React from 'react';
import Button from '@mui/material/Button';

const Buttons = ({btnclr,btnVal,btnHandler}) => {
  return (
    <div>
      <Button variant="contained"  size='large' color={btnclr} onClick={()=>{btnHandler()}}>{btnVal}</Button>
    </div>
  )
}

export default Buttons
