import { useContext } from "react";
import { Link,} from "react-router-dom";
import { AuthProvider } from "../../Providers/AuthProviders";

const Navbar = () => {
  const {user,loading,logOut} = useContext(AuthProvider);
  
  const handleLogOut=()=>{
    logOut()
    .then(() => {
      // Sign-out successful.
      // todo: navigate to the home
    }).catch((error) => {
      // An error happened.
    });
  }


  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/dashboard'}>DashBoard</Link>
              </li>
              <li>
              <Link to={'/terms'}>Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <h1 className=" text-xl">Task Management</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/dashboard'}>DashBoard</Link>
              </li>
              <li>
              <Link to={'/terms'}>Terms & Conditions</Link>
              </li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?
            <button onClick={handleLogOut} className="btn">Log Out</button>   
            :
            <Link to={'/signUp'} className="btn">login/register</Link>
          }
          


        </div>
      </div>
    </div>
  );
};

export default Navbar;
