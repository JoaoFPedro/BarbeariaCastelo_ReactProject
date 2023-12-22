import { styled } from 'styled-components';

export const Container = styled.div`
  margin-top: 80px;
  padding: 0 7%;

  & ul {
    list-style: none;
    padding: 0;
  }

  & li {
    display: flex;
    border-radius: 8px;
    margin-bottom: 8px;
    font-size: 16px;

    &.created {
      color: #696969;
      border: 2px solid #f5f5f5;
    }

    &.completed {
      color: #f5f5f5;
      border: 2px solid #f5f5f5;
    }

    &.active {
      color: #fb7512;
      box-shadow: 0px 0px 2px 0px #fb7512;
    }

    & > span:nth-child(1) {
      font-weight: 600;
      text-align: center;
      width: 10%;
    }

    & > span:nth-child(2) {
      width: 30%;
    }

    & > span:nth-child(3) {
      width: 40%;
    }

    & > span:nth-child(4) {
      font-weight: 600;
      text-align: center;
      width: 30%;
    }
  }
`;
