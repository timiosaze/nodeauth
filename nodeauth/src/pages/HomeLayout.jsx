import { Link, Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Node Auth
              </span>
            </a>
            <div className="flex items-center lg:order-2"></div>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default HomeLayout;
