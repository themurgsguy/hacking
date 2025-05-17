import classNames from 'classnames';

function Avatar({ className, name }) {
  const initials = name.match(/(\b\S)/g).slice(0, 2).join('');

  return (
    <div className={classNames('avatar', className)}>
      {initials}
    </div>
  );
};

export default Avatar;

