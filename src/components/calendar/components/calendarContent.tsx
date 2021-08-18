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
        color: 'white',
        borderRadius: '50%',
        padding: '0.5rem 0.75rem',
        backgroundColor: '#3B82F6',
        width: 'max-content',
      };
    }
    return {
      margin: '0.5rem',
    };
  }

  return (
    <Box display="flex" flexDirection="column" width="100%" justifyContent="space-between" border={1} borderColor="error.main">
      <Box display="flex" justifyContent="flex-start">
        <Box width="5%" display="flex" justifyContent="center" alignItems="center" textAlign="center" border={1} borderColor="error.main">
          hi
        </Box>
        <Box width="95%" display="flex" flexDirection="column" justifyContent="center" border={1} borderColor="error.main">
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
        <Box width="5%" border={1} borderColor="error.main">
          {times.map((time) => (
            <Box border={1} height="60px" borderColor="blue" display="flex" justifyContent="center">
              {time}
            </Box>
          ))}
        </Box>
        <Box width="95%" border={1} borderColor="error.main" display="flex" justifyContent="center">
          {week.map((day) => (
            <EventsContainer day={day} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
