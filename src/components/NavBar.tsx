import { NavLink } from 'react-router-dom';
import { logo } from '../assets';
import { active, unActive } from '../styles';
import { HomeIcon, ProjectIcon } from './icons';

const NavBar = () => {
  return (
    <nav className='-mx-4 w-full md:mx-0 md:w-[150px] md:flex-shrink-0 md:px-0'>
      <div className='flex items-center justify-between md:flex-col'>
        <img src={logo} alt='m in cursive' className='aspect-square w-20' />
        <ul className='flex flex-row gap-2 md:flex-col'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? active : unActive)}
            >
              <HomeIcon />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/work'
              className={({ isActive }) => (isActive ? active : unActive)}
            >
              <ProjectIcon />
              Work
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
