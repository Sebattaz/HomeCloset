import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { FaCartPlus } from "react-icons/fa";
import { homeContext } from '../context/HomeContext';

const BtnCart = () => {
    const {addCart} = useContext(homeContext)
  return (
    <Button onClick={addCart}><FaCartPlus /></Button>
  )
}

export default BtnCart