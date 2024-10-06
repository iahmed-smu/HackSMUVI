/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */

export const metadata = {
  title: 'Sign In - Open PRO',
  description: 'Page description',
}

import Link from 'next/link'


import logo from './logo.svg';
import Calendar from './calendar';

/* var mongodbRest = require('mongodb-rest/server.js');
mongodbRest.startServer(); */

export default function CalendarPage() {
  return (
    <Calendar />
  );
}
