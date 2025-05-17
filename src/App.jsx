import { Routes, Route } from 'react-router';

import Sidenav from './Sidenav';
import Dashboard from './Dashboard';

import './App.scss';

function Calendar() {
  return (
    <div className="container calendar">
      <h1>Hello, Calendar</h1>
    </div>
  );
}

function Settings() {
  return (
    <div className="container settings">
      <h1>Hello, Settings</h1>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Sidenav />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="calendar" element={<Calendar />}/>
        <Route path="settings" element={<Settings />}/>
      </Routes>
    </div>
  );

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
