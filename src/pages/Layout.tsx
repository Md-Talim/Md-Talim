import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <>
      <main className='container mx-auto flex h-screen max-w-3xl flex-col items-center gap-8 px-8 md:h-auto md:flex-row lg:min-w-[768px] lg:px-0'>
        <NavBar />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
