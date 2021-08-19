import { Box, Typography } from '@material-ui/core';
import { isSameDay } from 'date-fns';
import { EventsContainer } from './eventsContainer';
import { formatDateTimeToDate, getAllTime } from './utils';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const times = getAllTime();

export const CalendarContent = ({ week }: { week: Date[] }): JSX.Element => {
  function isSameDayStyles(date: Date, dateToday: Date): any {
    if (isSameDay(date, dateToday)) {
      return {
        color: '#F59E0B',
        width: 'max-content',
        fontSize: '2rem',
      };
    }
    return {
      margin: '0.5rem',
      fontSize: '2rem',
    };
  }

  return (
    <Box display="flex" flexDirection="column" width="100%" justifyContent="space-between">
      <Box display="flex" justifyContent="flex-start" borderBottom="1px solid #D1D5DB">
        <Box width="5%" display="flex" justifyContent="center" alignItems="center" textAlign="center"></Box>
        <Box width="95%" display="flex" flexDirection="column" justifyContent="center">
          <Box display="flex">
            {weekdays.map((day) => (
              <Box key={day} width="100%" display="flex" justifyContent="center">
                {day}
              </Box>
            ))}
          </Box>
          <Box display="flex">
            {week.map((dateTime) => (
              <Box key={formatDateTimeToDate(dateTime)} width="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Typography style={isSameDayStyles(dateTime, new Date())}>{formatDateTimeToDate(dateTime)}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-start">
        <Box width="5%">
          {times.map((time) => (
            <Box height="80px" display="flex" justifyContent="center">
              {time}
            </Box>
          ))}
        </Box>
        <Box width="95%" display="flex" justifyContent="center">
          {week.map((day) => (
            <EventsContainer day={day} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
