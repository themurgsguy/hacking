
function AssetItem({ name, overdue = false, onClick }) {
  const message = overdue ? 'Maintenace due' : 'Operational';

  return (
    <div className="asset-item" onClick={onClick}>
      <span className="material-symbols-rounded icon">
        kitchen
      </span>
      <p className="title">{name}</p>
      <div className="status">
        {message}
        {overdue && (
          <span className="material-symbols-rounded">
            error
          </span>
        )}
      </div>
    </div>
  );
}

function AssetGallary({ children }) {
  return (
    <div className="asset-gallary">
      {children}
    </div>
  );
}

export { AssetItem, AssetGallary };
