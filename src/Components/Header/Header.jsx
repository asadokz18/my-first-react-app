import { Link } from "react-router-dom"
import "./Header.css"
const Header = () => {
  return (
    <header className="header-container">
      <div id="header-logo">React Router Dom</div>
      <nav className="nav-container">
        <ul className="header-menus">
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
