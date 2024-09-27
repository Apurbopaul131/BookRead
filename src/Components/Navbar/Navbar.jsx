import NavItem from "../NavItem/NavItem";
import "./Navbar.css";

const Navbar = () => {
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/listed-books", name: "Listed Books" },
    { id: 3, path: "/pages-to-read", name: "Pages to Read" },
    { id: 4, path: "/about", name: "About" },
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {routes.map((route) => (
              <NavItem key={route.id} route={route}></NavItem>
            ))}
          </ul>
        </div>
        <h1 className="text-3xl text-[#131313] font-bold">ReadBook</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {routes.map((route) => (
            <NavItem key={route.id} route={route}></NavItem>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex gap-5">
        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white">Sign UP</a>
      </div>
    </div>
  );
};

export default Navbar;
