import classNames from 'classnames';
import { useNavigate } from 'react-router';

import { AssetGallary, AssetItem } from './AssetGallary';
import TimeStamp from './TimeStamp';
import Avatar from './Avatar';

const items = [
  {
    id: '1',
    name: 'My Refrigerator',
    overdue: true,
  },
  {
    id: '2',
    name: 'My Washing Machine',
    overdue: false,
  },
  {
    id: '3',
    name: 'My TV',
    overdue: false,
  }
];

function Dashboard() {
  const dateOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  const today = new Date();
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`asset/${id}`);
  }

  return (
    <div className="container dashboard">
      <header className="header">
        <Avatar name="Conway Mustagagaza"/>
        <div>
          <h1 className="welcome">Welcome back, Conway</h1>
          <TimeStamp className="date" dateString={today} />
        </div>
        <button className="button">
          <span className="material-symbols-rounded">add</span>
        </button>
      </header>

      <h2 className="section-title">My Assets</h2> 
      <AssetGallary>
        {items.map(({ id, name, overdue }) => (
          <AssetItem
            key={id}
            name={name}
            overdue={overdue}
            onClick={() => handleClick(id)}
          />
        ))}
      </AssetGallary>
    </div>
  );
}

export default Dashboard;
