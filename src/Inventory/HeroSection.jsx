import React from 'react';
import backgroundImg from '../assets/HeroBg.png';
import NavForInventory from './NavForInventory';
import './invent.css'
import Card from './card';

const links = [
  { link: '/features', text: 'Features' },
  { link: '/pricing', text: 'Pricing' },
  { link: '/customers', text: 'Customers' },
  { link: '/resources', text: 'Resources' },
];


const HeroSection = () => {
  return (
    <div
      className="hero2"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#3C3939',
        backgroundBlendMode: 'overlay',
        width: '100%',
    marginBottom:  '15rem'
      }}
    >
      <NavForInventory  links={links} />
      <h1 style={{marginTop: '5rem',color: '#F4F5F7', fontSize: '3rem', width: '70%', textAlign: 'center'}}>
        STREAMLINE YOUR INVENTORY WITH <br /> THE ALL-IN-ONE INVENTORY <br />MANAGEMENT SOFTWARE!
        </h1>
        <button style={{outline: 'none',borderRadius: '0.2rem', border: 'none',marginTop: '2rem', fontSize: '1.2rem',color: '#FFFFFF',textAlign: 'center', background: '#E43D2B', padding: '0.7rem 5rem'}}>
            Sign up for free
        </button>
        <div className="cardBox">
            <Card svgImage={
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.7917 31.7917L36.6667 36.6667M21.5 24.75H28M34.5 24.75C34.5 19.3652 30.1348 15 24.75 15C19.3652 15 15 19.3652 15 24.75C15 30.1348 19.3652 34.5 24.75 34.5C30.1348 34.5 34.5 30.1348 34.5 24.75Z" stroke="#293241" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.33301 9.99998C3.55051 7.77415 4.04334 6.27715 5.16009 5.1604C6.27684 4.04365 7.77384 3.55081 9.99967 3.33331M9.99967 36.6666C7.77384 36.4491 6.27684 35.9563 5.16009 34.8395C4.04334 33.7228 3.55051 32.2258 3.33301 30M36.6663 9.99998C36.4488 7.77415 35.956 6.27715 34.8392 5.1604C33.7225 4.04365 32.2255 3.55081 29.9997 3.33331M3.33301 16.6666V23.3333M23.333 3.33331H16.6663" stroke="#293241" stroke-width="2.5" stroke-linecap="round"/>
                </svg>
                
            } 
            title={'Error Reduction'} 
            content={'By automating tracking, transactions, and reporting for real-time accuracy.'}
            boxType={true}/>

            <Card svgImage={
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33301 5H11.2207C15.5725 5 17.7485 5 19.7795 5.66865C21.8107 6.33732 23.561 7.62992 27.0618 10.2151L33.2145 14.7586C33.2817 14.8082 33.3153 14.8331 33.347 14.8569C35.4148 16.4146 36.6413 18.845 36.666 21.4338C36.6663 21.4735 36.6663 21.5152 36.6663 21.5988C36.6663 21.6618 36.6663 21.6933 36.6658 21.72C36.6372 23.5192 35.1855 24.9708 33.3863 24.9995C33.3597 25 33.3282 25 33.2652 25H3.33301" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M3.33301 18.3333H10.158C14.4811 18.3333 16.6426 18.3333 18.6425 19.085C20.6423 19.8365 22.3302 21.2833 25.706 24.1768L26.6663 25" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M16.667 11.6667H28.3337" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M3.33301 31.6667H36.6663" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M30 31.6667V35" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 31.6667V35" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 31.6667V35" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                
            } 
            title={'Improved Efficiency'} 
            content={'Inventory management improves efficiency by streamlining processes, automating workflows, and optimizing stock handling.'}
            boxType={false}/>

            <Card svgImage={
               <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12.1663 18.3333L18.833 3.33331C20.1591 3.33331 21.4309 3.8601 22.3685 4.79778C23.3062 5.73546 23.833 7.00723 23.833 8.33331V15H33.2663C33.7495 14.9945 34.2281 15.0942 34.669 15.292C35.1098 15.4899 35.5024 15.7812 35.8194 16.1458C36.1365 16.5105 36.3705 16.9397 36.5052 17.4037C36.64 17.8678 36.6722 18.3556 36.5997 18.8333L34.2997 33.8333C34.1791 34.6282 33.7754 35.3527 33.1629 35.8733C32.5503 36.394 31.7702 36.6757 30.9663 36.6666H12.1663M12.1663 18.3333V36.6666M12.1663 18.3333H7.16634C6.28229 18.3333 5.43444 18.6845 4.80932 19.3096C4.1842 19.9347 3.83301 20.7826 3.83301 21.6666V33.3333C3.83301 34.2174 4.1842 35.0652 4.80932 35.6903C5.43444 36.3155 6.28229 36.6666 7.16634 36.6666H12.1663" stroke="#293241" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
               
            } 
            title={'Customer Satisfaction'} 
            content={'Enhances customer satisfaction by ensuring accurate stock availability, timely deliveries, and seamless order fulfillment.'}
            boxType={true}/>
        </div>
    </div>
  );
};

export default HeroSection;
