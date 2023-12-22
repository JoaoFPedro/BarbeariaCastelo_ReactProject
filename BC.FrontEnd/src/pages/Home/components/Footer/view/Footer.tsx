import { ReactElement } from 'react';
import LogoIcon from '../../../../../assets/images/logo.png';
import { Container } from './styles';

function Footer(): ReactElement {
  return (
    <Container>
      <div>
        <img className='mb-4' src={LogoIcon} alt='Logo barbearia' width={220} />
        <h2 className='mb-2'>Cortes na régua chaaama</h2>

        <p>Endereço: Avenida Amazonas, 1234 - Belo Horizonte</p>
        <p>Telefone: (31) 3456-7890</p>
        <p>WhatsApp: (31) 98765-4321</p>
        <p className='mb-4'>CNPJ: 12.345.678/0001-90</p>

        <p className='copy-right'>&copy; 2023 Castelos Barbershop. Todos os direitos reservados.</p>
      </div>
      <nav>
        <ul>
          <li className='mb-2'>
            <a href='/'>Página Inicial</a>
          </li>
          <li className='mb-2'>
            <a href='/sobre'>Sobre Nós</a>
          </li>
          <li className='mb-2'>
            <a href='/beneficios'>Benefícios</a>
          </li>
          <li>
            <a href='/area-membros'>Área dos Membros</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Footer;
