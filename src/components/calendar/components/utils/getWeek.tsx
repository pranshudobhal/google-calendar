import { startOfWeek, addDays } from 'date-fns';

type GetWeek = (date: Date) => Date[];

export const getWeek: GetWeek = (date: Date = new Date()) => {
  let startDateOfWeek = startOfWeek(date);
  const week: Date[] = [...Array(7)].map((_, index) => addDays(startDateOfWeek, index));
  return week;
};
