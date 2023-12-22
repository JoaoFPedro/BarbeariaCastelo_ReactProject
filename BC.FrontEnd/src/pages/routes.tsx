import ProfilesEnum from '../shared/enums/ProfilesEnum';
import RoutesEnum from '../shared/enums/RoutesEnum';
import IRoute from '../shared/interfaces/IRoute';
import Dashboard from './Dashboards';
import Home from './Home';
import Login from './Login';

const routes: IRoute[] = [
  {
    path: RoutesEnum.HOME,
    element: <Home />,
    accessProfile: [ProfilesEnum.PUBLIC],
  },
  {
    path: RoutesEnum.DASHBOARD,
    element: <Dashboard />,
    accessProfile: [ProfilesEnum.ADMINISTRATOR],
  },
  {
    path: RoutesEnum.LOGIN,
    element: <Login />,
    accessProfile: [ProfilesEnum.PUBLIC],
  },
];

export default routes;
