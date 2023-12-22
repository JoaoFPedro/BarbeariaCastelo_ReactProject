import { type ReactElement } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { Container } from './styles';

function BannerTextSection(): ReactElement {
  return (
    <Container>
      <h1>Uma experiência diferenciada em salão de beleza em sua cidade</h1>
      <p>
        Se você ja imaginou qual estilo de corte utiliza, aqui vai uma lista de estilos para todos
        os homens.
      </p>
      <button>
        Conheça <BsFillPlayFill />
      </button>
    </Container>
  );
}

export default BannerTextSection;
