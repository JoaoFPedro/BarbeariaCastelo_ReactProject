import { styled } from 'styled-components';

export const Container = styled.div`
  & > h1 {
    width: 50%;
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  & > p {
    width: 35%;
    font-size: 16px;
    color: #696969;
    font-weight: 300;
    margin-bottom: 36px;
  }

  & > button {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    background: #fb7512;
    border: solid 1px #fb7512;
    border-radius: 50px;
    padding: 16px 68px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    & > :last-child {
      margin-left: 12px;
      font-size: 16px;
    }
  }
`;
