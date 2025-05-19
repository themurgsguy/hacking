import { TaskList, TaskItem } from './TaskList';

const asset = {
  name: 'My Refrigerator',
  tasks: [
    {
      id: 1,
      title: 'Replace fresh water filter',
      dueDate: '2025-05-17T00:00:00Z',
    },
    {
      id: 2,
      title: 'Clean cool air ducks',
      dueDate: '2025-05-17T00:00:00Z',
    },
  ]
};

function AssetDetails() {
  const { name, tasks } = asset;

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div className="container asset-details">
      <header className="header">
        <h1 className="title">{name}</h1>
        <h2 className="subtitle">
          {tasks.length} items
        </h2>
      </header>

      <h2 className="section-title">Upcoming</h2>

      <TaskList>
        {tasks.map(({ id, title, dueDate }) => (
          <TaskItem
            key={id}
            name={title}
            dueDate={dueDate}
            onClick={() => handleClick(id)}
          />
        ))}
      </TaskList>
    </div> 
  );
}

export default AssetDetails;
