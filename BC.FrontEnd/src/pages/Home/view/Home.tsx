import { type ReactElement } from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Products from '../components/Products';
import SchedulingForm from '../components/SchedulingForm';

function Home(): ReactElement {
  return (
    <>
      <Header />
      <Banner />
      <Products />
      <SchedulingForm />
      <Footer/>
    </>
  );
}
export default Home;
