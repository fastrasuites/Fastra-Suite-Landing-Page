import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import NavbarMenu from "./components/Navbar";
import logo from './assets/logo.png';
import Hero from './components/Hero';
import CustomerRating from './components/CustomerRating';
import HowItWorks from './components/HowItWorks';
import Featured from './components/Featured';
import WhyUs from './components/Whyus';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Dashboard from './components/Dashboard';
import PopUp from './components/ShowUp';
import NavBar from './components/NavBar2';
import HowItWorksCard from './components/HowItWorksCard';

const links = [
  { href: '#product', text: 'Product' },
  { href: '#customer', text: 'Customers' },
  { href: '#company', text: 'Company' },
  { href: '#pricing', text: 'Pricing' },
];

function LandingPage() {

    const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div style={{width: '100%'}}> 
      <NavBar />
      <Hero setShowPopUp={setShowPopUp}/>
      <PopUp setShowPopUp={setShowPopUp} showPopUp={showPopUp}/>
      <CustomerRating />
      {/* <HowItWorks /> */}
      <HowItWorksCard />
      <Featured />
      <section style={{ backgroundColor: '#3B7DED', padding: '20px'}}>
        <WhyUs /></section>
      {/*<Pricing /> */}
      <Dashboard />
      <Footer />  
      

    </div>
  );
}

export default LandingPage;
