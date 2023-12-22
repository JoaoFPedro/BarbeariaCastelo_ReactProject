import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { getDay, setHours, setMinutes } from 'date-fns';
import { ReactElement, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Controller, useForm } from 'react-hook-form';
import { FaCheck, FaSpinner } from 'react-icons/fa';
import * as yup from 'yup';
import APIRoutes from '../../../../../shared/enums/APIRoutes';
import WeekDaysEnum from '../../../../../shared/enums/WeekDaysEnum';
import Container from './styles';

interface ISchedulingFormData {
  name: string;
  date: Date;
  email: string;
}

const schema = yup.object({
  name: yup.string().required('Campo obrigatório').min(6, 'Obrigatório 6 caracteres no mínimo.'),
  date: yup.date().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
});

function SchedulingForm(): ReactElement {
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const filterDays = (dateInCurrentMonth: Date): boolean => {
    const dayInWeek = getDay(dateInCurrentMonth);
    const isBusinessDay = ![WeekDaysEnum.SUNDAY, WeekDaysEnum.SATURDAY].includes(dayInWeek);

    return isBusinessDay;
  };

  const filterTime = (selectedDate: Date): boolean => {
    const currentDate = new Date();
    const isPastTime = currentDate.getTime() >= selectedDate.getTime();
    const isLauchTime = selectedDate.getHours() === 12;

    return !isPastTime && !isLauchTime;
  };

  const callbackHandleSubmit = async (requestData: ISchedulingFormData): Promise<void> => {
    setIsLoading(true);

    try {
      const response = await axios.post(APIRoutes.SCHEDULING, requestData);
      console.log('Agendamento cadastrado com sucesso!', response.data);
    } catch (error) {
      console.error('Erro ao cadastrar agendamento:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <form>
        <div />
        <div>
          <h1>Agende seu atendimento</h1>
          <div className='form-control'>
            <input
              className={errors?.name != null ? 'input-error' : ''}
              {...register('name')}
              type='text'
              placeholder='Informe seu nome'
            />
            <span className='error'>{errors?.name?.message?.toString()}</span>
          </div>
          <div className='form-control'>
            <Controller
              control={control}
              name='date'
              render={({ field }) => (
                <DatePicker
                  className={errors?.date != null ? 'input-error' : ''}
                  placeholderText='Informe a data e hora do seu agendamento'
                  timeIntervals={60}
                  selected={field.value}
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                  filterTime={filterTime}
                  filterDate={filterDays}
                  minDate={new Date()}
                  maxDate={new Date(new Date().getFullYear(), 11, 31)}
                  minTime={setHours(setMinutes(new Date(), 0), 8)}
                  maxTime={setHours(setMinutes(new Date(), 0), 17)}
                  showTimeSelect
                  timeFormat='HH:mm'
                  dateFormat='dd/MM/yyyy HH:mm'
                />
              )}
            />
            <span className='error'>{errors?.date?.message?.toString()}</span>
          </div>
          <div className='form-control'>
            <input
              className={errors?.email != null ? 'input-error' : ''}
              {...register('email')}
              type='text'
              placeholder='Informe seu e-mail'
            />
            <span className='error'>{errors?.email?.message?.toString()}</span>
          </div>
          {/* Adicionar loading neste botão */}
          <button type='button' onClick={handleSubmit(callbackHandleSubmit)} disabled={isLoading}>
            {isLoading ? <FaSpinner className='loading-spinner' /> : 'Agendar atendimento'}
            {!isLoading && <FaCheck />}
          </button>
        </div>
      </form>
    </Container>
  );
}

export default SchedulingForm;
