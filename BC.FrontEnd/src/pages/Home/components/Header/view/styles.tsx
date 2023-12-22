import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7%;
  height: 120px;

  & ul {
    display: flex;
    list-style-type: none;

    & > li > a {
      text-decoration: none;
      color: #696969;
      font-weight: 500;

      &:hover {
        color: #fb7512;
      }
    }

    & > li:not(:last-child) {
      margin-right: 24px;
    }
  }
`;
