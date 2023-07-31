import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
`;

export const SearchFormInput = styled.input`
  display: flex;
  flex-direction: column;
  margin-right: 35px;
  width: 460px;
  padding: 10px 10px;
  border-radius: 20px;
  border: 2px solid rgb(168 155 161);
  box-shadow: 4px 14px 30px -1px rgba(3, 76, 57, 0.51);
  outline: transparent;
`;

export const SearchBtn = styled.button`
  cursor: pointer;
  width: 125px;
  height: 40px;
  border-radius: 35px;
  border: transparent;
  box-shadow: 0px 31px 30px -16px rgba(345, 1, 2, 0.1),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background-color: #1fe6eb;
`;
