import { Box, Typography } from '@material-ui/core';
import { formatDateTimeToDate } from './utils';

/**
 * FIXME:
 * - All 15th are getting highlighted as today
 * - For eg check September 15th
 */

export const CalendarContent = ({ week }: { week: Date[] }): JSX.Element => {
  function isSameDay(date: Date, dateToday: Date): any {
    if (formatDateTimeToDate(date) === formatDateTimeToDate(dateToday)) {
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
            <Typography style={isSameDay(dateTime, new Date())}>{formatDateTimeToDate(dateTime)}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
