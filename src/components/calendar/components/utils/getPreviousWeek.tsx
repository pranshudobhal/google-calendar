import { startOfWeek, subDays } from 'date-fns';
import { getWeek } from './getWeek';

type GetPreviousWeek = (date: Date) => [Date[], Date];

export const getPreviousWeek: GetPreviousWeek = (date: Date) => {
  let startDateOfWeek = startOfWeek(date);
  let lastDateOfPreviousWeek = subDays(startDateOfWeek, 1);

  const previousWeek = getWeek(lastDateOfPreviousWeek);
  return [previousWeek, lastDateOfPreviousWeek];
};
