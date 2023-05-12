import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid bg-black ">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active text-white"  aria-current="page" to='/'>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to='projects'>
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to='education'>
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to='workExperience'>Work Experience</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
