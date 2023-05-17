import Image from 'next/image';
import { logo } from '../assets';
import NavLink from './NavLink';
import { HomeIcon, ProjectIcon } from './icons';

const NavBar = () => {
  return (
    <nav className='mx-auto h-24 w-full max-w-5xl py-8'>
      <div className='flex items-center justify-between'>
        <Image src={logo} alt='m in cursive' className='aspect-square w-20' />
        <ul className='flex flex-row gap-2'>
          <li>
            <NavLink link='/'>
              <HomeIcon />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink link='/work'>
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
