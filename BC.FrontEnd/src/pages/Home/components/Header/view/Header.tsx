import { type ReactElement } from 'react';
import LogoIcon from '../../../../../assets/images/logo.png';
import RoutesEnum from '../../../../../shared/enums/RoutesEnum';
import HeaderLink from '../../HeaderLink';
import { Container } from './styles';

function Header(): ReactElement {
  const headerItems = [
    { label: 'Benefícios', path: '#' },
    { label: 'Sobre nós', path: '#' },
    { label: 'Área dos membros', path: RoutesEnum.LOGIN },
  ];

  return (
    <Container>
      <img src={LogoIcon} alt='Logo barbearia' width={220} />
      <nav>
        <ul>
          {headerItems.map((headerItem) => (
            <HeaderLink key={headerItem.label} {...headerItem} />
          ))}
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
