import react,{useState} from "react";
import { NavLink } from "react-router-dom";
const Navbar = () =>
{
    const[show,hide]=useState(false);
    return  (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <NavLink className="navbar-brand" to="#"><span className="span1">S</span>dot</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
     aria-label="Toggle navigation" onClick={() => hide(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show? "show" : ""}`} >
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cases">Cases</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blog">Blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/page">Page</NavLink>
        </li>
        
        <form className="d-flex">
      
      <button className="btn btn-outline-success" type="submit">GetInTouch</button>
      <button className="btn btn-outline-success" type="submit">Signin</button>
    </form>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
};
export default  Navbar;