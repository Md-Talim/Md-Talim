import { NavLink } from 'react-router-dom';
import { logo } from '../assets';
import { active, unActive } from '../styles';
import { HomeIcon, ProjectIcon } from './icons';

const NavBar = () => {
  return (
    <nav className='mt-4 md:w-1/5 md:border-r-2 md:border-r-darker'>
      <div className='flex items-center justify-between md:flex-col md:gap-4'>
        <img
          src={logo}
          alt='m in cursive'
          className='aspect-square w-20'
        />
        <ul className='flex flex-row gap-2 md:flex-col'>
          <li className=''>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? active : unActive)}
            >
              <HomeIcon />
              Home
            </NavLink>
          </li>
          <li className=''>
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
