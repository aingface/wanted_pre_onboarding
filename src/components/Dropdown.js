import React from "react";
import styled from "styled-components";

function Dropdown() {
  const optionList= ['딸기','당근','수박','참외','메론','게임']
  const options=optionList.map((item)=>{
    return(
      <option key={item} value={item}>
      {item}
    </option>
    )
  })

  console.log(options);

  return (
    <DropdownWrapper>
      <Select>
        {options}
      </Select>
    </DropdownWrapper>
  );
}

const DropdownWrapper=styled.div`
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
const Select=styled.select`
  width: 50%;
`

export default Dropdown