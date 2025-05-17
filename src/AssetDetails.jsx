const asset = {
  name: 'My Refrigerator',
};

function AssetDetails () {
  const { name } = asset;

  return (
    <div className="container asset-details">
      <header className="header">
        <h1 className="title">{name}</h1>
      </header>
    </div> 
  );
}

export default AssetDetails;
