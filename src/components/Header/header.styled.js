import styled from 'styled-components';

export const NavHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
export const NavSpan = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-right: 470px;
  
`;
export const NavButton = styled.button`
  font-size: 14px;
  width: 110px;
  height: 40px;
  border: none;
  border-radius: 14px;
  background-color: blue;
  color: white;
  cursor: pointer; 
  transition: all ease-in-out 0.4s;
  &:hover {
    background-color: gray;
   
    box-shadow: 0cap;
    transform: all scale(1.1);
  }`;
