import React from 'react'
import Container from 'react-bootstrap/Container';
import NavbarMenu from "../components/Navbar";
import logo from '../assets/logo.png';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';
import Pricing from '../components/Pricing';
import HeroSection from './HeroSection';
import WhyUs from './WhyUs';
import NavBar from '../components/NavBar2';



const links = [
    { href: '/#product', text: 'Product' },
    { href: '#customer', text: 'Customers' },
    { href: '/company', text: 'Company' },
    { href: '/#pricing', text: 'Pricing' },
  ];

const Inventory = () => {


    return (
       <div style={{width: "100%"}}>
        <NavBar />
        <HeroSection />
        
        <WhyUs />
        <Pricing />
        <Dashboard />
        <Footer />
       </div>
    )
}

export default Inventory