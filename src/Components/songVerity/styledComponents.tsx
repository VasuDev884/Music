import styled from "styled-components";

export const Scroller  = styled.div`
overflow-y:scroll ;
height: 440px;
padding-right: 10px;
margin-top: 10px;
width: 100%;
&::-webkit-scrollbar-thumb {
  background: gray; 
  border-radius: 10px;
}
&::-webkit-scrollbar-thumb:hover {
  background: lightgray; 
}
&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #242424; 
  border-radius: 10px;
}
&::-webkit-scrollbar {
  width: 5px; 
}
`

export const VerityHolder = styled.div`
  width: 103.6%;
  padding-left: 20px;
margin-left: -20px;
margin-top: -10px;
   height: 90px; 
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  color: white;
  background-color: brown; 
`

