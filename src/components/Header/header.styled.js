import styled from 'styled-components';

export const NavHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: lightgray;
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
`;
export const NavSpan = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: navy;
`;
export const NavButton = styled.button`
  font-size: 14px;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 14px;
  background-color: blue;
  color: white;
  cursor: pointer; 
  transition: all ease-in-out 0.4s;
  &:hover {
    background-color: gray;
    color: navy;
   
    box-shadow: 0cap;
    transform: scale(1.1);
  }`;
