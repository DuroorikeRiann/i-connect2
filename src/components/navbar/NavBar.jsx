import './style.css'
import Logo from "../../assets/svg/Logo.svg"
import Button from "../button/Button"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav className='padding-y'>
            <a href="/"><img src={Logo} alt="i-connect" /></a>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/categories">Category</Link></li>
                    <li><Link to="/">About Us</Link></li>
                </ul>
                <div className='action-btns'>
                    <a href="/"><Button text="Sign Up"/></a>
                    <a href="/"><Button type="secondary" text="Log in"/></a>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar