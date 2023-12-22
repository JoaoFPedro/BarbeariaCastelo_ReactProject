import { styled } from 'styled-components';

export const Container = styled.div`
  & > div {
    width: 60px;
    height: 60px;
    background-color: #ffdcc0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > h4,
  h6 {
    text-align: center;
  }
  & > h4 {
    color: #201e1d;
    margin: 3px 0;
  }
  & > h6 {
    color: #989a9a;
    margin-bottom: 16px;
  }
`;
