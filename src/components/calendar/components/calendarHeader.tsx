import { Button, Box, Typography, Tooltip, IconButton, Zoom } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Dispatch, SetStateAction } from 'react';
import { getCurrentDayDate, getNextWeek, getPreviousWeek, getCurrentMonthAndYear } from './utils';

type Props = {
  date: Date;
  week: Date[];
  setWeek: Dispatch<SetStateAction<Date[]>>;
  setDate: Dispatch<SetStateAction<Date>>;
};

export const CalendarHeader = ({ date, week, setWeek, setDate }: Props): JSX.Element => {
  const nextWeekHandler = () => {
    const [nextWeek, firstDateOfNextWeek] = getNextWeek(date);
    setWeek(nextWeek);
    setDate(firstDateOfNextWeek);
  };

  const previousWeekHandler = () => {
    const [previousWeek, lastDateOfPreviousWeek] = getPreviousWeek(date);
    setWeek(previousWeek);
    setDate(lastDateOfPreviousWeek);
  };

  const dateToday = getCurrentDayDate(new Date());
  const current = week.length !== 0 && getCurrentMonthAndYear(week);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" p={2} mb={2}>
      <Tooltip title={dateToday}>
        <Button style={{ fontFamily: 'Montserrat' }} variant="outlined" onClick={() => setDate(new Date())}>
          Today
        </Button>
      </Tooltip>
      <Typography variant="h5">{current}</Typography>
      <Box display="flex" alignItems="center">
        <Tooltip title="Previous week" TransitionComponent={Zoom}>
          <IconButton aria-label="Previous week" onClick={() => previousWeekHandler()}>
            <NavigateBeforeIcon style={{ cursor: 'pointer' }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Next week" TransitionComponent={Zoom}>
          <IconButton aria-label="Next week" onClick={() => nextWeekHandler()}>
            <NavigateNextIcon style={{ cursor: 'pointer' }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
