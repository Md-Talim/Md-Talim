import Image from 'next/image';
import { logo } from '../assets';
import NavLink from './NavLink';
import { HomeIcon, ProjectIcon } from './icons';

const NavBar = () => {
  return (
    <nav className='w-full'>
      <div className='mx-auto flex max-w-4xl items-center justify-between p-8 lg:max-w-5xl lg:px-4'>
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
