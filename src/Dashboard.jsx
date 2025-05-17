import classNames from 'classnames';

function Avatar({ className, name }) {
  const initials = name.match(/(\b\S)/g).slice(0, 2).join('');

  return (
    <div className={classNames('avatar', className)}>
      {initials}
    </div>
  );
};

function Dashboard() {
  const today = new Date();
  const dateOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className="container dashboard">
      <header className="header">
        <Avatar name="Conway Mustagagaza"/>
        <div>
          <h1 className="welcome">Welcome back, Conway</h1>
          <h2 className="date">
            {today.toLocaleDateString(undefined, dateOptions)}
          </h2>
        </div>
        <button className="button">
          <span className="material-symbols-rounded">add</span>
        </button>
      </header>
    </div>
  );
}

export default Dashboard;
