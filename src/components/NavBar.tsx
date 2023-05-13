import { NavLink } from 'react-router-dom';
import { logo } from '../assets';
import { active, unActive } from '../styles';
import { HomeIcon, ProjectIcon } from './icons';

const NavBar = () => {
  return (
    <nav className='hidden w-1/3 border-r-2 border-r-darker md:block'>
      <div className='space-y-4 px-4'>
        <img
          src={logo}
          alt='m in cursive'
          className='mx-8 aspect-square w-20'
        />
        <ul className='flex flex-col gap-2'>
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
