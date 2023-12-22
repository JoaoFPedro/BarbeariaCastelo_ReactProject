import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 80px 7%;
  color: #696969;
  box-shadow: 0px 2px 17px 0px rgba(87, 87, 87, 0.6);

  & .mb-4 {
    margin-bottom: 16px;
  }

  & .mb-2 {
    margin-bottom: 8px;
  }

  & .copy-right {
    font-size: 12px;
  }

  & h2 {
    color: #333;
  }

  & nav ul {
    list-style-type: none;
    padding: 0;

    & a {
      text-decoration: none;
      color: #696969;
      font-weight: 500;
      flex-direction: column;

      &:hover {
        color: #fb7512;
      }
    }
  }
`;
