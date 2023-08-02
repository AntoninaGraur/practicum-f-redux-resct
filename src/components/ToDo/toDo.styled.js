import styled from 'styled-components';


export const BtnDeleteToDO = styled.button`
  background-color: #00b4ffc2;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  box-shadow: -1px 3px 27px 2px rgba(0, 0, 0, 0.49);
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: aquamarine;
    color: white;
    transform: scale(1.1);
  }
`;