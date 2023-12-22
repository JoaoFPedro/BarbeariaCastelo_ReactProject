import { ReactElement } from 'react';

import Header from '../components/Header';
import Scheduling from '../components/Scheduling';

function Dashboard(): ReactElement {
  return (
    <>
      <Header />
      <Scheduling />
    </>
  );
}
export default Dashboard;
