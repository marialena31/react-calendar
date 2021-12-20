import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './components/Main'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function App() {
  return (
    <Main/>
  );
}

export default App;
