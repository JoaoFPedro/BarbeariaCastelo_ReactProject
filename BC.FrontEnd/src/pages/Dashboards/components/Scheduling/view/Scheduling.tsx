import axios from 'axios';
import { isSameDay } from 'date-fns';
import { ReactElement, useEffect, useState } from 'react';

import APIRoutes from '../../../../../shared/enums/APIRoutes';
import IScheduleItem from '../../../../../shared/interfaces/IScheduleItem';
import ScheduleItem from '../../ScheduleItem';
import SelectedDate from '../../SelectedDate';
import { Container } from './styles';

function Scheduling(): ReactElement {
  const [schedules, setSchedules] = useState<IScheduleItem[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const loadData = (): void => {
    axios
      .get(APIRoutes.SCHEDULING)
      .then((response) => {
        setSchedules(response.data.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  };

  useEffect(loadData, []);

  const filteredSchedules = schedules.filter((schedule) =>
    isSameDay(new Date(schedule.date), selectedDate),
  );

  return (
    <Container>
      <h1>Meus Agendamentos</h1>

      <SelectedDate
        date={selectedDate}
        onChangeDate={(date: Date) => {
          setSelectedDate(date);
        }}
      />

      <ul>
        {filteredSchedules.map((schedule) => (
          <ScheduleItem key={schedule.id} schedule={schedule} loadData={loadData} />
        ))}
      </ul>
    </Container>
  );
}
export default Scheduling;
