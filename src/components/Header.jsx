import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='orange '>
      <div className='nav-wrapper'>
        <Link to='/' className='logo'>
          React Food
        </Link>
        <ul id='nav-mobile' className='right'>
          <li>
            <Link to='/about' className='nav-link'>
              About
            </Link>
          </li>
          <li>
            <Link to='/contact' className='nav-link'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
