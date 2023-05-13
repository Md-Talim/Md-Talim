import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <>
      <main className='container absolute left-1/2 top-1/2 mx-auto flex h-screen max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col gap-32 px-8 md:h-auto md:flex-row md:gap-8 lg:min-w-[768px] lg:px-0'>
        <NavBar />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
