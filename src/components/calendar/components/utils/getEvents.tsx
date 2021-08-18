import { getDate } from 'date-fns';
import { eventsData } from '../../../../data';

export type GetEvents = {
  id: string;
  title: string;
  date: Date;
  duration: number;
};

export const getEvents = (dateTime: Date): GetEvents[] => {
  return eventsData.filter((event) => getDate(event.date) === getDate(dateTime));
};
