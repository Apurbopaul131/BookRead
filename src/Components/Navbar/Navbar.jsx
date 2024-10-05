import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../LevelContext/LevelContext";
import NavItem from "../NavItem/NavItem";
import "./Navbar.css";

//This component is render from App.jsx that is the root component of react router.
const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleSignout = () =>{
    logOut()
    .then(() => {
      toast.success('Sign-out successful')
    }).catch((err) => {
      toast.error(err.message);
    });
  }

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/listed-books", name: "Listed Books" },
    { id: 3, path: "/pages-to-read", name: "Pages to Read" },
    { id: 4, path: "/about", name: "About" },
  ];
  if(user){
    const profileObj = {
      id: 5, path: "/profile", name: "Profile"
    }
    routes.push(profileObj);
  }
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
        {
          user ? <>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="hello"
            src={user?.photoURL} />
        </div>
      </div>
          <Link to={`/login`}><button className="btn bg-[#23BE0A] text-white" onClick={handleSignout}>Sign out</button></Link>
          </>
          :
          <>
            <Link to={`/login`}><button className="btn bg-[#23BE0A] text-white">Sign In</button></Link>
            <Link to={`/registration`}><button className="btn bg-[#59C6D2] text-white">Sign Up</button></Link>
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;
