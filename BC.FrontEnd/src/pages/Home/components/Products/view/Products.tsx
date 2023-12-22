import { type ReactElement } from 'react';
import maquinaBarberia from '../../../../../assets/images/maquinaBarbearia.png';
import minoxidil from '../../../../../assets/images/minoxidil.png';
import navalhaBarbearia from '../../../../../assets/images/navalhaBarbearia.png';
import { Container } from './styles';
function Products(): ReactElement {
  return (
    <Container>
      <h1>Produtos mais Vendidos</h1>
      <div>
        <img src={minoxidil}></img>
        <div>
          <h2>Minoxidil Pro</h2>
          <h3>R$ 150,00</h3>
        </div>
      </div>
      <div>
        <img src={maquinaBarberia}></img>
        <div>
          <h2>Maquina de barbear Pro</h2>
          <h3>R$ 400,00</h3>
        </div>
      </div>
      <div>
        <img src={navalhaBarbearia}></img>
        <div>
          <h2>Navalha Pro</h2>
          <h3>R$ 200,00</h3>
        </div>
      </div>
    </Container>
  );
}

export default Products;
