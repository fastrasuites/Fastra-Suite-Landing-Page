import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../assets/logo.png';
import '../Inventory/invent.css';
import ProductPopup from './product';


const NavBar = ({ links })  => {

    const [rotate, setRotate] = useState(false);
  return (
    <nav className="NavBar">

        <div className="navBarsect1" style={{display: 'flex', alignItems: 'center'}}>
            <Link to="/"><img style={{width: '100%'}} src={logo} alt="company-logo" /></Link>
       
        <ul className="links2">
            <li>Product 
            {rotate ? (<i className='bx bx-chevron-up' style={{fontSize: '1.6rem'}} onClick={() => setRotate(prevState => !prevState)}></i>) :
            (<i className='bx bx-chevron-down'  style={{fontSize: '1.6rem', }} onClick={() => setRotate(prevState => !prevState)}></i>)
            }
            {rotate && <ProductPopup rotate={rotate} setRotate={setRotate} />}
           </li>
            <li><Link to='#customer'>Customer</Link></li>
            <li><Link to='#company'>Company</Link></li>
            <li><Link to='#pricing'>Pricing</Link></li>
        </ul>
        </div>
        <div className="btns">
            <button className="btn1"><Link>Sign In</Link></button>
            <button className="btn2"><Link to="https://app.fastrasuite.com/">Sign Up</Link></button>
        </div>

    </nav>
  );
}


export default NavBar
