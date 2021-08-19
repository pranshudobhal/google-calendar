import { Box } from '@material-ui/core';
import { getMinutes } from 'date-fns';
import { getTimeSlot } from './utils';
import { GetEvents } from './utils/getEvents';

export const EventLabel = ({ event }: { event: GetEvents }) => {
  const [convertStartToTime, convertEndToTime] = getTimeSlot(event.date, event.duration);

  const labelStyles = () => {
    const height = (event.duration * 100) / 60;
    const start = getMinutes(event.date);
    const heightOfCell = 80;
    const marginTop = ((start / 60) * 100 * heightOfCell) / 100;

    return {
      backgroundColor: '#FCD34D',
      borderRadius: '5px',
      padding: '0.125rem 0.75rem',
      fontSize: '0.75rem',
      marginTop: `${marginTop}px`,
      height: `${height}%`,
      overflow: 'hidden',
      width: '100%',
    };
  };

  return (
    <Box height="100%" style={labelStyles()} fontWeight="fontWeightMedium">
      <div>Meeting with {event.title}</div>
      <div style={{ fontSize: '0.7rem' }}>
        {convertStartToTime} - {convertEndToTime}
      </div>
    </Box>
  );
};
