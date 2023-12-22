import { type ReactElement } from 'react';
import { BsScissors } from 'react-icons/bs';
import { GiRazor } from 'react-icons/gi';
import { TbRazor } from 'react-icons/tb';
import BannerPrice from '../../BannerPrice/view/BannerPrice';

const services = [
  { id: 1, icon: <BsScissors style={{ fontSize: '25px' }} />, name: 'Corte', price: 55.0 },
  { id: 2, icon: <GiRazor style={{ fontSize: '25px' }} />, name: 'Pezinho', price: 15.0 },
  { id: 3, icon: <TbRazor style={{ fontSize: '25px' }} />, name: 'Barba', price: 35.0 },
];

function BannerPricesSection(): ReactElement {
  return (
    <div>
      {services.map((service) => (
        <BannerPrice
          key={service.id}
          icon={service.icon}
          name={service.name}
          price={service.price}
        />
      ))}
    </div>
  );
}

export default BannerPricesSection;
