import { styled } from 'styled-components';
import ProfissionalImage from '../../../../../assets/images/profissional.png';

export const Container = styled.div`
  padding: 0 7%;
  height: calc(100vh - 120px);
  background-image: url(${ProfissionalImage});
  background-repeat: no-repeat;
  background-position: 75% 0;
  background-size: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
