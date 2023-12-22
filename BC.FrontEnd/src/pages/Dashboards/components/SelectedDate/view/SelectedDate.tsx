import { addDays, format, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ReactElement } from 'react';
import { Container } from './styles';

interface SelectedDateProps {
  date: Date;
  onChangeDate: (date: Date) => void;
}

function SelectedDate({ date, onChangeDate }: SelectedDateProps): ReactElement {
  const localeOptions = {
    locale: ptBR,
  };

  const formattedDate = format(date, `EEEE, dd 'de' MMMM 'de' yyyy`, localeOptions);

  const handleNextDayClick = (): void => {
    const nextDay = addDays(date, 1);
    onChangeDate(nextDay);
  };

  const handlePrevDayClick = (): void => {
    const prevDay = subDays(date, 1);
    onChangeDate(prevDay);
  };

  return (
    <Container>
      <button onClick={handlePrevDayClick}>&lt;</button>
      <h2>{formattedDate}</h2>
      <button onClick={handleNextDayClick}>&gt;</button>
    </Container>
  );
}
export default SelectedDate;