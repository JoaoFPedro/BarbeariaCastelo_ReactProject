import { ReactElement } from 'react';
import ProfilesEnum from '../enums/ProfilesEnum';

interface IRoute {
  path: string;
  element: ReactElement;
  accessProfile: ProfilesEnum[];
}

export default IRoute;
