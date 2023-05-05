export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid bg-black ">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-white"  aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white">Work Experience</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
