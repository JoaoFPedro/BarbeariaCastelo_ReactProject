import { styled } from 'styled-components';
import ClienteBarbeiro from '../../../../../assets/images/cliente-barbeiro.jpg';

const Container = styled.div`
  & .form-control {
    display: flex;
    flex-direction: column;
  }

  & .error {
    color: #f43b3b;
    font-size: 14px;
    margin-top: 4px;
  }

  & .input-error {
    border-color: #f43b3b;
  }

  // Todos os inputs dentro do container
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

    // Metade da tela, imagem
    & > :first-child {
      width: 55%;
      padding-left: 7%;
      background-image: url(${ClienteBarbeiro});
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0.8;
      clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);
    }

    // Metadade da tela, formulário
    & > :last-child {
      height: calc(100vh - 200px);
      width: 45%;
      box-sizing: border-box;
      padding-right: 7%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      // Título da seção
      & > h1 {
        margin-bottom: 28px;
        text-align: center;
      }

      & > button {
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

        &:hover {
          opacity: 0.9;
        }

        & > :last-child {
          margin-left: 12px;
          font-size: 16px;
          font-weight: 900;
        }
      }

      // Todas as linhas, exceto a última
      & > :not(:last-child, :first-child) {
        margin-bottom: 12px;
      }

      // Inputs de nome e e-mail
      & input {
        box-sizing: border-box;
        width: 100%;
      }
    }
  }

  // Spinner para o Loading
  .loading-spinner {
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Container;
