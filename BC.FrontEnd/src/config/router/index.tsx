import { ReactElement } from 'react';
import { Route as RouteDOM, Routes as RoutesDOM } from 'react-router-dom';
import routes from '../../pages/routes';
import ProfilesEnum from '../../shared/enums/ProfilesEnum';
import { useAppSelector } from '../../store';

function Router(): ReactElement {
  const { roleName } = useAppSelector((state) => state.loggedUser);

  const enabledRoutes = routes.filter(
    (route) =>
      route.accessProfile.includes(ProfilesEnum.PUBLIC) ||
      (!!roleName && route.accessProfile.includes(roleName as ProfilesEnum)),
  );

  return (
    <RoutesDOM>
      {enabledRoutes.map((route) => (
        <RouteDOM key={route.path} {...route} />
      ))}
      <RouteDOM
        path='*'
        element={
          <>
            <b>Atenção</b>
            <p>Página não encontrada ou você não tem permissão para acessá-la.</p>
          </>
        }
      />
    </RoutesDOM>
  );
}

export default Router;
