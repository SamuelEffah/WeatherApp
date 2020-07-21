import styled from "styled-components";

export default styled.div`
  height:240px;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  width: 250px;
  position: relative;
  flex-shrink: 0;
  border-radius:10px;
  padding:5px;
  margin:0px 5px;
  background-color:rgba(212, 212, 212,0.7);
  cursor:pointer;
  :hover{
        box-shadow: 2px 4px 3px #adaaaa;
    }

`;
