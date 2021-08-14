import { Box, Typography } from '@material-ui/core';
import { isSameDay } from 'date-fns';
import { formatDateTimeToDate } from './utils';

export const CalendarContent = ({ week }: { week: Date[] }): JSX.Element => {
  function isSameDayStyles(date: Date, dateToday: Date): any {
    if (isSameDay(date, dateToday)) {
      return {
        color: 'white',
        borderRadius: '50%',
        padding: '0.5rem 0.75rem',
        backgroundColor: '#3B82F6',
      };
    }
    return {
      margin: '0.5rem',
    };
  }

  return (
    <Box display="flex" flexDirection="column" width="100%" justifyContent="space-between" border={1} borderColor="error.main">
      <Box width="100%" display="flex" justifyContent="center">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <Box key={day} width="100%" display="flex" justifyContent="center">
            {day}
          </Box>
        ))}
      </Box>
      <Box width="100%" display="flex" justifyContent="center">
        {week.map((dateTime) => (
          <Box key={formatDateTimeToDate(dateTime)} width="100%" display="flex" justifyContent="center">
            <Typography style={isSameDayStyles(dateTime, new Date())}>{formatDateTimeToDate(dateTime)}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
