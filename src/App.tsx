import './App.css';
import { Calendar } from './components';
import { Container, CssBaseline, makeStyles } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Montserrat',
  },
});

function App() {
  const [date, setDate] = useState<Date>(new Date());

  const classes = useStyles();

  return (
    <main>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters className={classes.root}>
        <Calendar date={date} setDate={setDate} />
      </Container>
    </main>
  );
}

export default App;
