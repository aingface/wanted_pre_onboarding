import styled from 'styled-components';
import { useState } from 'react';


export default function Tab(){
  const tabList=["감자", "고구마" ,"카레라이스"];
  const [clickedTab,setClickedTab]=useState(tabList[0]);  
  
  const onClickHandler=(e)=>{
    setClickedTab(e.currentTarget.innerText)
  }
  
  const TabElements=tabList.map((item)=>{
    return(
      <TabElement onClick={onClickHandler} clickedTab={clickedTab} key={item}>{item}</TabElement>
    )
  }
  )

  return(
    <TabWrapper>
      {TabElements}
    </TabWrapper>  
  );    
}

const TabWrapper=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  width: 20rem;
  height: 3rem;
  margin-top: 2rem;
`
const TabElement=styled.div`
  color: ${props=>props.clickedTab===props.children ? "black" : "lightGrey"};
  font-weight: bold;
  margin: 0 1rem;
  cursor: pointer;
`