import axios from 'axios';
import { ReactElement } from 'react';

import APIRoutes from '../../../../../shared/enums/APIRoutes';
import IScheduleItem from '../../../../../shared/interfaces/IScheduleItem';
import { ListItem, SpanStatus } from './styles';

interface SchedulingItemProps {
  schedule: IScheduleItem;
  loadData: () => void;
}

function ScheduleItem({ schedule, loadData }: SchedulingItemProps): ReactElement {
  const { id, date, email, name, status } = schedule;

  const concludedStatus = 'Concluído';
  const canceledStatus = 'Cancelado';
  const isConcluded = status === concludedStatus;
  const isCanceled = status === canceledStatus;

  const hours = date.substring(11, 13);
  const minutes = date.substring(14, 16);
  const currentHours = new Date().getHours();
  const isFuture = currentHours >= parseInt(hours) - 1;

  const shouldRenderConcludedButton = isFuture && !isConcluded && !isCanceled;
  const shouldRenderCanceledButton = !isConcluded && !isCanceled;

  const handleUpdateStatus = async (newStatus: string): Promise<void> => {
    try {
      await axios.patch(`${APIRoutes.SCHEDULING}/${id}`, { status: newStatus });
      loadData();
    } catch (error) {
      console.error('Erro ao atualizar o Status:', error);
    }
  };

  return (
    <ListItem status={status}>
      <span>{`${hours}:${minutes}`}</span>
      <span>{name}</span>
      <span>{email}</span>
      <SpanStatus status={status}>{status}</SpanStatus>
      <div>
        {shouldRenderConcludedButton && (
          <button
            onClick={async () => {
              await handleUpdateStatus(concludedStatus);
            }}
          >
            Concluir
          </button>
        )}
        {shouldRenderCanceledButton && (
          <button
            className='cancel'
            onClick={async () => {
              await handleUpdateStatus(concludedStatus);
            }}
          >
            Cancelar
          </button>
        )}
      </div>
    </ListItem>
  );
}

export default ScheduleItem;
