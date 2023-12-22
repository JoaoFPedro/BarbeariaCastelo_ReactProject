import { ReactElement } from 'react';
import LogoIcon from '../../../../../assets/images/logo.png';
import { useAppSelector } from '../../../../../store';
import { Container } from './styles';

function Header(): ReactElement {
  const { firstName } = useAppSelector((state) => state.loggedUser);
  return (
    <Container>
      <img src={LogoIcon} alt='Logo barbearia' width={145} />
      <h1>
        Olá, <span>{firstName}</span>.{' '}
      </h1>
    </Container>
  );
}
export default Header;
