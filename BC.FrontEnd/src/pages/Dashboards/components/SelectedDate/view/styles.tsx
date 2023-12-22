import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 40px 0;

  & h2 {
    color: #696969;
    font-size: 20px;
    font-weight: 400;
  }

  & button {
    background-color: transparent;
    border: none;
    color: #fb7512;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    margin: 0 15px;
  }
`;
