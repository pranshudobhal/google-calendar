import { CalendarContent, CalendarHeader } from './components';
import { Box } from '@material-ui/core';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getWeek } from './components/utils';

type Props = {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
};

export const Calendar = ({ date, setDate }: Props): JSX.Element => {
  const [week, setWeek] = useState<Date[]>([]);

  useEffect(() => {
    const currentWeek = getWeek(date);
    setWeek(currentWeek);
  }, [date]);

  return (
    <Box display="flex" flexDirection="column" width="100%" mb={6}>
      <CalendarHeader date={date} week={week} setWeek={setWeek} setDate={setDate} />
      <CalendarContent week={week} />
    </Box>
  );
};
