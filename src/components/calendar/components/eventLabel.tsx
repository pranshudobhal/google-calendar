import { Box } from '@material-ui/core';
import { getTime, millisecondsToMinutes, minutesToMilliseconds } from 'date-fns';
import { getTimeSlot } from './utils';
import { GetEvents } from './utils/getEvents';

export const EventLabel = ({ event }: { event: GetEvents }) => {
  const [convertStartToTime, convertEndToTime] = getTimeSlot(event.date, event.duration);

  const labelStyles = () => {
    // const start = getTime(event.date);
    const eventDuration = minutesToMilliseconds(event.duration);
    // const end = start + eventDuration;
    const height = (millisecondsToMinutes(eventDuration) * 100) / 60;
    // const marginTop = (millisecondsToMinutes(start) * 100) / 600;

    return {
      // marginTop: `${marginTop}%`,
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
