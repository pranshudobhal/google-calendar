import { endOfWeek, addDays } from 'date-fns';
import { getWeek } from './getWeek';

type GetNextWeek = (date: Date) => [Date[], Date];

export const getNextWeek: GetNextWeek = (date: Date) => {
  let endDateOfWeek = endOfWeek(date);
  let firstDateOfNextWeek = addDays(endDateOfWeek, 1);

  const nextWeek = getWeek(firstDateOfNextWeek);
  return [nextWeek, firstDateOfNextWeek];
};
