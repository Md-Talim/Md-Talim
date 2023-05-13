import { logo } from '../assets';
import { HomeIcon, ProjectIcon } from './icons';

const NavBar = () => {
  return (
    <nav className='hidden w-1/3 border-r-2 border-r-darker md:block'>
      <div className='flex flex-col gap-4'>
        <img
          src={logo}
          alt='m in cursive'
          className='mx-8 aspect-square w-20'
        />
        <ul className='flex flex-col gap-2'>
          <li className='mx-4 flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 transition hover:bg-darker hover:text-lighter'>
            <HomeIcon />
            <a>Home</a>
          </li>
          <li className='mx-4 flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 transition hover:bg-darker hover:text-lighter'>
            <ProjectIcon />
            <a>Work</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
