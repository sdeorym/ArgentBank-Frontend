import Button from '../general/Button';

function Header() {
// classname={"editButton"}
  const text="Edit name";
  return (
    <div className="header">
      <h1 className="welcome">Welcome back<br />Cuchimilitangas Tiku!</h1>
      <Button content={text} />
    </div>
  )
}

export default Header