import { Link } from 'react-router-dom';
import Button from '../general/Button';

function Header({name}) {
  const text="Edit name";
  return (
    <div className="header">
      <h1 className="welcome">Welcome back<br />{name}!</h1>
      <Link to="/user/edit">
        <Button content={text} />
      </Link>
    </div>
  )
}

export default Header