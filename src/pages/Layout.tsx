import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <>
      <main className='absolute left-1/2 top-1/2 mx-auto flex max-w-3xl -translate-x-1/2 -translate-y-1/2 gap-8 px-8 lg:px-0'>
        <NavBar />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
