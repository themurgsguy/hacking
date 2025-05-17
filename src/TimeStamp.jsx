import classNames from 'classnames';

function TimeStamp({ className, dateString }) {
  const date = new Date(dateString);

  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  return (
    <p className={classNames('time-stamp', className)}>
      {date.toLocaleDateString(undefined, options)}
    </p>
  );
}

export default TimeStamp;
