import React from "react";
import styled from "styled-components";
import { useState } from "react";

export default function Slider() {
  const [value, setValue]=useState(0);

  const handleChange=(event)=> {
    setValue(event.target.value);
  }
  return(
    <SliderWrapper>
        <ValueBoard>{value}%</ValueBoard>	
    	  <InputRange type="range" 
          min="0" max="100" 
          value={value} 
          onChange={handleChange}
          />
        	   
    </SliderWrapper>
  );
}

const SliderWrapper=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20rem;
  height: 8rem;
  margin-top: 2rem;
  margin-left: 1rem;
`
const InputRange=styled.input`
width: inherit;
margin-top: 1rem;
`
const ValueBoard=styled.div`
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  height: 3rem;
  padding-top: 1rem;
  align-items: center;

  border: lightgray solid 1px;
`


