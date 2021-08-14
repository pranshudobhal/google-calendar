import { format } from 'date-fns';
import getMonth from 'date-fns/getMonth';
import getYear from 'date-fns/getYear';

export const formatDateTimeToDate = (dateTime: Date): string => {
  return format(dateTime, 'd');
};

export const getCurrentDayDate = (dateTime: Date): string => {
  const day = format(dateTime, 'eeee');
  const date = format(dateTime, 'd');
  const month = format(dateTime, 'MMMM');
  return `${day}, ${date} ${month}`;
};

export const getCurrentMonthAndYear = (week: Date[]): string => {
  const firstDayOfWeek = week[0];
  const lastDayOfWeek = week[6];

  if (getMonth(firstDayOfWeek) === getMonth(lastDayOfWeek)) {
    return `${format(firstDayOfWeek, 'MMM')} ${format(firstDayOfWeek, 'y')}`;
  } else if (getMonth(firstDayOfWeek) !== getMonth(lastDayOfWeek) && getYear(firstDayOfWeek) !== getYear(lastDayOfWeek)) {
    return `${format(firstDayOfWeek, 'MMM')} ${format(firstDayOfWeek, 'y')} - ${format(lastDayOfWeek, 'MMM')} ${format(lastDayOfWeek, 'y')}`;
  } else {
    return `${format(firstDayOfWeek, 'MMM')} - ${format(lastDayOfWeek, 'MMM')} ${format(firstDayOfWeek, 'y')}`;
  }
};
