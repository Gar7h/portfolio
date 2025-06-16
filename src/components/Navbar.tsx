import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/gregorius-garth-2561511a4/"><FaLinkedin /></a>
          <a href="https://github.com/Gar7h"><FaGithub /></a> 
          <a href="https://www.instagram.com/gregoriusgarth"> <FaInstagram /></a>
        </div>
    </nav>
    
  )
}

export default Navbar
