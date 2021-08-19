import { Box } from '@material-ui/core';
import { getMinutes } from 'date-fns';
import { getTimeSlot } from './utils';
import { GetEvents } from './utils/getEvents';

export const EventLabel = ({ event }: { event: GetEvents }) => {
  const [convertStartToTime, convertEndToTime] = getTimeSlot(event.date, event.duration);

  const labelStyles = () => {
    const height = (event.duration * 100) / 60;
    const start = getMinutes(event.date);
    const heightOfCell = 60;
    const marginTop = ((start / 60) * 100 * heightOfCell) / 100;

    return {
      marginTop: `${marginTop}px`,
      height: `${height}%`,
    };
  };

  return (
    <Box height="100%" border={1} style={labelStyles()} borderColor="green">
      <div>{event.title}</div>
      <div>
        {convertStartToTime} - {convertEndToTime}
      </div>
    </Box>
  );
};
