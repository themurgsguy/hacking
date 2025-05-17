import classNames from 'classnames';

import TimeStamp from './TimeStamp';

function TaskItem({ className, name, dueDate, onClick }) {
  return (
    <div
      className={classNames('task-item', className)}
      onClick={onClick}
    >
      <p className="title">{name}</p>
      <TimeStamp dateString={dueDate} />
    </div>
  );
}

function TaskList({ children }) {
  return (
    <div className="task-list">
      {children}
    </div>
  );
}

export { TaskList, TaskItem };
