import { NavLink } from 'react-router';
import viteLogo from '/vite.svg';

function Brand() {
  return (
    <NavLink className="brand" to="/">
      <img src={viteLogo} />
    </NavLink>
  )
}

function Sidenav() {
  const classes = ({ isActive }) => {
    return isActive ? 'active nav' : 'nav';
  };

  return (
    <nav className="sidenav">
      <Brand />
      <NavLink className={classes} to="/">
        <span className="material-symbols-rounded">home</span>
        Dashboard
      </NavLink>
      <NavLink className={classes} to="calendar">
        <span className="material-symbols-rounded">calendar_today</span>
        Calendar
      </NavLink>
      <NavLink className={classes} to="settings">
        <span className="material-symbols-rounded">settings</span>
        Settings
      </NavLink>
    </nav>
  );
}

export default Sidenav;
