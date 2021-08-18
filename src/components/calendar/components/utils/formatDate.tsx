import { format, getTime, getMonth, getYear, minutesToMilliseconds, isBefore, addMinutes, setHours, setMinutes, setSeconds, setMilliseconds } from 'date-fns';

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

export const getTimeSlot = (startDate: Date, duration: number) => {
  const start = getTime(startDate);
  const eventDuration = minutesToMilliseconds(duration);
  const end = start + eventDuration;

  const convertStartToTime = format(start, 'p');
  const convertEndToTime = format(end, 'p');

  return [convertStartToTime, convertEndToTime];
};

export const getAllTime = () => {
  const setTime = (x: Date, h = 0, m = 0, s = 0, ms = 0) => setHours(setMinutes(setSeconds(setMilliseconds(x, ms), s), m), h);

  const from = setTime(new Date(), 0);
  const to = setTime(new Date(), 24);
  const step = (x: Date): Date => addMinutes(x, 60);

  const blocks = [];
  let cursor = from;

  while (isBefore(cursor, to)) {
    blocks.push(format(cursor, 'h a'));
    cursor = step(cursor);
  }

  return blocks;
};
