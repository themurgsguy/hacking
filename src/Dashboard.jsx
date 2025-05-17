import './dashboard.css';

function Dashboard() {
  const today = new Date();
  const dateOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className="container dashboard">
      <h1 className="welcome">Welcome back, Conway</h1>
      <h2 className="date">
        {today.toLocaleDateString(undefined, dateOptions)}
      </h2>
    </div>
  );
}

export default Dashboard;
