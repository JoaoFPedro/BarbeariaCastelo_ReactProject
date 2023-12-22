import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 0 7%;
  display: flex;
  align-items: center;
  height: 200px;
  background-color: #202020;
  justify-content: space-between;

  & > h1 {
    width: 17%;
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 16px;
    color: #fff;
    text-align: center;
  }
  & > div {
    display: flex;
    align-items: center;
    margin: 0 25px;
  }

  & > div > img {
    width: 100;
    height: 100px;
    max-width: 100px;
    border: solid 2px white;
    border-radius: 50%;
    margin-right: 12px;
  }
  & > div > div > h2 {
    color: #fb7512;
    font-size: 18px;
  }
  & > div > div > h3 {
    color: white;
    font-size: 14px;
  }
`;
