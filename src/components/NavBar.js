import { Link } from "react-router-dom";
import "./css/navbar.css";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/my-web-site">
          <i className="fa-solid fa-house fa-2x"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto font" style={{ fontSize: "30px" }}>
            <Link className="nav-link active" to="/projects">
              <button
                className="navbar-toggler text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                
                
                aria-label="Toggle navigation"
              >PROYECTOS</button>
              <h1 className="d-none d-lg-block">PROYECTOS</h1>
            </Link>
            <Link className="nav-link active ms-lg-5" to="/skills">
            <button
                className="navbar-toggler text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
            
                aria-label="Toggle navigation"
              >HABILIDADES</button>
              <h1 className="d-none d-lg-block">HABILIDADES</h1>
            </Link>
            <Link className="nav-link  active ms-lg-5" to="/programskills">
            <button
                className="navbar-toggler text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
              
                aria-label="Toggle navigation"
              >DESARROLLO</button>
              <h1 className="d-none d-lg-block">DESARROLLO</h1>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
