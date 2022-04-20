import styled from "styled-components";
import { useState } from "react";
import React from "react";


const ButtonWrapper = styled.div`
margin-top: 1rem;
background-color: #eeeeee;
width: 20rem;
height: 2rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 1rem;
z-index: 0;
position: relative;
`;

const Button = styled.button`
  position:relative;
  background: ${props=>props.buttonState ? "white":"none"};
  border: none;
  border-radius: 1rem;
  width: 9.9rem;
  height: 1.9rem;
  color: ${props=>props.buttonState===true ? "black":"#b8b8b8"};
  font-weight: bold;  
  cursor: pointer;
  z-index: 10;
  transition: ${props=>props.buttonState ===true && "width, ease-in-out 0.2s 0.2s"};
`;

export default function Toggle() {
  const [defaultValue,setDefaultValue]=useState(true)
  const [detailValue,setDetailValue]=useState("")
  
  const onClickHandlerForDefaultButton=()=>{
    setDefaultValue(true)
    setDetailValue(false)  
  }
  const onClickHandlerForDetailButton=(e)=>{
    setDefaultValue(false)
    setDetailValue(true)
  }
return (
  <ButtonWrapper>
    <Button onClick={onClickHandlerForDefaultButton} buttonState={defaultValue}>
      기본
    </Button>
    <Button onClick={onClickHandlerForDetailButton} buttonState={detailValue}>
      상세
    </Button>
  </ButtonWrapper>
  );
}


