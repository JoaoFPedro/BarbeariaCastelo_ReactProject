import axios from 'axios';
import Cookies from 'js-cookie';
import { useAppDispatch } from '../../store';
import { addLoggedUser } from '../../store/slice/loggedUserSlice';
import APIRoutes from '../enums/APIRoutes';
import { SESSION_STORAGE_TOKEN_KEY } from '../utils/const';

interface IUserMe {
  first_name: string;
  email: string;
  role: {
    name: string;
  };
}

interface IUserMeResponse {
  data: IUserMe;
}

interface IUseLogin {
  refreshLogin: () => Promise<void>;
}

function useLogin(): IUseLogin {
  const dispatch = useAppDispatch();

  const refreshLogin = async (): Promise<void> => {
    const accessToken = Cookies.get(SESSION_STORAGE_TOKEN_KEY);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken ?? ''}`;

    const { data: responseMe } = await axios.get<IUserMeResponse>(
      `${APIRoutes.USERS_ME}?fields=*.*`,
    );

    if (!responseMe) return;

    const {
      email,
      first_name: firstName,
      role: { name: roleName },
    } = responseMe.data;

    dispatch(addLoggedUser({ email, firstName, roleName }));
  };

  return { refreshLogin };
}

export default useLogin;
