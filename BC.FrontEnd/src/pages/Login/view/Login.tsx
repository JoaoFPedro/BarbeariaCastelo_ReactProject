import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useState, type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import APIRoutes from '../../../shared/enums/APIRoutes';
import RoutesEnum from '../../../shared/enums/RoutesEnum';
import useLogin from '../../../shared/hooks/useLogin';
import { SESSION_STORAGE_TOKEN_KEY } from '../../../shared/utils/const';
import { Container } from './styles';

interface ILoginData {
  email: string;
  password: string;
}

interface ILoginResponse {
  data: {
    access_token: string;
  };
}

const schema = yup.object({
  email: yup.string().required('Campo Obrigatório').email('Insira um email  válido'),
  password: yup.string().required('Campo Obrigatório'),
});

function Login(): ReactElement {
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const { refreshLogin } = useLogin();

  const callbackHandleSubmit = async (requestData: ILoginData): Promise<void> => {
    setIsLoading(true);

    const { data: response } = await axios
      .post<ILoginResponse>(APIRoutes.LOGIN, requestData)
      .finally(() => {
        setIsLoading(false);
      });

    if (response.data) {
      Cookies.set(SESSION_STORAGE_TOKEN_KEY, response.data.access_token, { expires: 1 });
      await refreshLogin();
      navigate(RoutesEnum.DASHBOARD);
    }
  };

  return (
    <Container>
      <form>
        <div />
        <div>
          <h1>Login</h1>
          <input
            className={errors?.email != null ? 'input-error' : ''}
            {...register('email')}
            type='text'
            placeholder='Informe seu email'
          />
          <span className='error'>{errors?.email?.message?.toString()}</span>
          <input {...register('password')} type='password' placeholder='Informe sua senha' />
          <span className='error'>{errors.password?.message ?? ''}</span>
          <button
            type='button'
            disabled={isLoading}
            onClick={handleSubmit(async (data: ILoginData) => {
              await callbackHandleSubmit(data);
            })}
          >
            {isLoading ? 'Carregando...' : 'Logar'}
          </button>
        </div>
      </form>
    </Container>
  );
}
export default Login;
