import { type ReactElement } from 'react';
import BannerPricesSection from '../../BannerPricesSection';
import BannerTextSection from '../../BannerTextSection';
import { Container } from './styles';

function Banner(): ReactElement {
  return (
    <Container>
      <BannerTextSection />
      <BannerPricesSection />
    </Container>
  );
}

export default Banner;
