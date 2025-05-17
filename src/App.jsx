import { Routes, Route } from 'react-router';

import Sidenav from './Sidenav';
import Dashboard from './Dashboard';
import AssetDetails from './AssetDetails';
import Calendar from './Calendar';
import Settings from './Settings';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Sidenav />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="settings" element={<Settings />} />
        <Route path="asset/:id" element={<AssetDetails />} />
      </Routes>
    </div>
  );
}

export default App
