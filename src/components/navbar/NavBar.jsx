import './style.css'
import Logo from "../../assets/svg/Logo.svg"
import Button from "../button/Button"

const NavBar = () => {
  return (
    <>
        <nav className='padding'>
            <a href="/"><img src={Logo} alt="i-connect" /></a>
            <div className='nav-items'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Category</a></li>
                    <li><a href="/">About Us</a></li>
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