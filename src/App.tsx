import './App.css';
import { Calendar } from './components';
import { Container, CssBaseline } from '@material-ui/core';
import { useState } from 'react';

function App() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <main>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters>
        <Calendar date={date} setDate={setDate} />
      </Container>
    </main>
  );
}

export default App;
