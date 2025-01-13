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

const links = [
  { href: '/#product', text: 'Product' },
  { href: '#customer', text: 'Customers' },
  { href: '/company', text: 'Company' },
  { href: '/#pricing', text: 'Pricing' },
];

function App() {
  return (
    <>
      <Container>
        <NavbarMenu 
          brandLogo={logo}
          links={links} 
          signInText="Sign In" 
          signUpText="Sign Up" 
        />
      </Container>
      <Hero />
      <CustomerRating />
      <HowItWorks />
      <Featured />
      <section style={{ backgroundColor: '#3B7DED', padding: '20px'}}>
        <WhyUs /></section>
      <Pricing />
      <Dashboard />
      <Footer />  
      

    </>
  );
}

export default App;
