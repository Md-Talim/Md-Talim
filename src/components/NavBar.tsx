import Image from 'next/image';
import { logo } from '../assets';
import NavLink from './NavLink';
import { HomeIcon, ProjectIcon } from './icons';

const NavBar = () => {
  return (
    <nav className='-mx-4 w-full md:mx-0 md:h-screen md:w-[150px] md:flex-shrink-0 md:px-0'>
      <div className='flex items-center justify-between md:sticky md:top-52 md:flex-col'>
        <Image src={logo} alt='m in cursive' className='aspect-square w-20' />
        <ul className='flex flex-row gap-2 md:flex-col'>
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
