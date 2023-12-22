import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7%;
  height: 80px;
  box-shadow: 0px 0px 10px 0px #696969;
  & h1 {
    color: #696969;
    font-size: 16px;
    font-weight: 600;

    & span {
      color: #fb7512;
    }
  }
`;
