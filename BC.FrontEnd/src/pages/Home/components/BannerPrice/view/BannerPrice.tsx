import { ReactElement } from 'react';
import { Container } from './styles';

interface BannerPriceProps {
  icon: ReactElement;
  name: string;
  price: number;
}

function formatatCurrency(value: number): string {
  const formattedCurrency = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formattedCurrency;
}

function BannerPrice({ icon, name, price }: BannerPriceProps): ReactElement {
  return (
    <Container>
      <div>{icon}</div>
      <h4>{formatatCurrency(price)}</h4>
      <h6>{name}</h6>
    </Container>
  );
}

export default BannerPrice;
