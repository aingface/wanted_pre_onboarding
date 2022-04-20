import React from 'react';
import styled from "styled-components";

function Input() {
  return (
    <InputWrapper>
      Email
      <InputEmail type="email" placeholder='email@xxxx.com'/>
      Password
      <InputPW type="password" placeholder='Password'/>
    </InputWrapper>
  );
}
const InputWrapper=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ededed;
  width: 20rem;
  height: 5rem;
  margin-top: 2rem;
  margin-left: 1rem;
`
const InputEmail= styled.input`

`
const InputPW= styled.input`

`
export default Input