import { styled } from 'styled-components';
import ClienteBarbeiro from '../../../assets/images/cliente-barbeiro.jpg';

export const Container = styled.div`
  & .error {
    color: red;
    font-size: 14px;
    margin-bottom: 12px;
  }
  & .input-error {
    border-color: #f43b3b;
  }
  input {
    padding: 16px 24px;
    border: 1px solid #b3b3b3;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 400;

    &:focus-visible {
      outline: none;
      border: 1px solid #fb7512 !important;
    }
  }
  & > form {
    display: flex;
    align-items: center;
    // Background image
    & > :first-child {
      width: 55%;
      padding-left: 7%;
      background-image: url(${ClienteBarbeiro});
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0.8;
      clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);
      height: 100vh;
    }

    // Formulario
    & > :last-child {
      height: calc(100vh - 200px);
      width: 45%;
      box-sizing: border-box;
      padding-right: 7%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 12px;
      font-size: 16px;
    }
    & h1 {
      text-align: center;
      margin-bottom: 12px;
    }

    & button {
      background-color: #fb7512;
      border: 1px solid #fb7512;
      border-radius: 50px;
      font-size: 14px;
      color: #fff;
      padding: 16px 0;
      width: 100%;
      cursor: pointer;
      font-weight: 700;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3px;

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;
