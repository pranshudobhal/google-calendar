import { Box } from '@material-ui/core';
import { format } from 'date-fns';
import { EventLabel } from './eventLabel';
import { getAllTime, getEvents } from './utils';
import { GetEvents } from './utils/getEvents';

export const EventsContainer = ({ day }: { day: Date }): JSX.Element => {
  const eventsByDay = getEvents(day);
  const times = getAllTime();

  function isSameHour(timeInHour: string, date: Date) {
    const timeOne = timeInHour;
    const timeTwo = format(date, 'h a');

    return timeOne === timeTwo ? true : false;
  }

  function eventByTime(time: string): GetEvents[] | null {
    const events = eventsByDay.filter((event) => isSameHour(time, event.date));

    return events.length !== 0 ? events : null;
  }

  return (
    <Box width="100%">
      {times.map((time) => (
        <Box height="80px" display="flex" justifyContent="center" border="1px solid #D1D5DB">
          {eventByTime(time) !== null ? eventByTime(time)?.map((event) => <EventLabel event={event} />) : ''}
        </Box>
      ))}
    </Box>
  );
};
