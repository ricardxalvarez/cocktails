import React, { useState }  from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    const [navbar, setNavbar] = useState(false)
    const background = ()=>{
        if (window.scrollY >= 200){
            setNavbar(true)
        } else if (window.scrollY < 200){
            setNavbar(false)
        }
    }
    window.addEventListener('scroll',background)
    return <nav >
        <div className={`${navbar? 'nav-center active': 'nav-center'}`}>
            <h1>Ricardo's Cocktails</h1>
                <ul>
                    <li>
                        <Link to='/'>
                            <button>Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            <button>About</button>
                        </Link>
                    </li>
                </ul>
        </div>
    </nav>
}

export default Navbar