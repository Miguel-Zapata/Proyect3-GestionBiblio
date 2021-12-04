import axios from "axios";
import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'



const PruebaCheck = ()=>{
return(
    <div>
        <input type="checkbox" name="lotengo" id="lotengo" />
        <label htmlFor="lotengo">Lo Tengo</label>
    </div>
)
    
  }
  
export default PruebaCheck;