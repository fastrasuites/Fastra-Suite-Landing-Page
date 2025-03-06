import React, {useState} from 'react';
import { Link, useSubmit } from 'react-router-dom';
import './invent.css';


const NavForInventory = ()  => {
    const [rotate, setRotate] = useState(false)

  return (
    <nav className="inventoryheader">
        <div className="logo4">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.99968 15.4167C5.92016 15.4167 6.66634 16.1629 6.66634 17.0833V25.4167C6.66634 27.8208 6.66989 29.4562 6.83454 30.681C6.99276 31.8577 7.27171 32.4027 7.64266 32.7737C8.01361 33.1447 8.55864 33.4237 9.73539 33.5818C10.9601 33.7465 12.5955 33.75 14.9997 33.75H24.9997C27.4038 33.75 29.0393 33.7465 30.264 33.5818C31.4407 33.4237 31.9857 33.1447 32.3567 32.7737C32.7277 32.4027 33.0067 31.8577 33.1648 30.681C33.3295 29.4562 33.333 27.8208 33.333 25.4167V17.0833C33.333 16.1629 34.0792 15.4167 34.9997 15.4167C35.9202 15.4167 36.6663 16.1629 36.6663 17.0833V25.5342C36.6663 27.7912 36.6665 29.6522 36.4685 31.1252C36.2605 32.6715 35.8072 34.0372 34.7137 35.1307C33.6202 36.2242 32.2545 36.6775 30.7082 36.8853C29.2352 37.0835 27.3742 37.0833 25.1173 37.0833H14.8821C12.6252 37.0833 10.7642 37.0835 9.29124 36.8853C7.74486 36.6775 6.37914 36.2242 5.28564 35.1307C4.19213 34.0372 3.73884 32.6715 3.53093 31.1252C3.33291 29.6522 3.33296 27.7912 3.33301 25.5343V17.0833C3.33301 16.1629 4.07921 15.4167 4.99968 15.4167Z" fill="#F4F5F7"/>
<path d="M29.1095 2.91666C30.1687 2.91662 31.071 2.91657 31.81 3.00396C32.6002 3.09737 33.3287 3.30182 33.9882 3.79414C34.6442 4.28372 35.0543 4.92576 35.3838 5.65922C35.695 6.35166 35.9785 7.23252 36.3147 8.27729L37.4752 11.8826L37.5 11.9601C37.7935 12.8704 38.0288 13.6003 37.8565 14.7039C37.7852 15.1612 37.694 15.5365 37.5395 15.8841C37.3942 16.211 37.213 16.4615 37.074 16.6534L37.0535 16.682C35.4132 18.953 32.4057 20.4167 29.5902 20.4167C27.7907 20.4167 26.1283 19.8222 24.794 18.8205C23.4595 19.8228 21.7978 20.4167 19.9978 20.4167C18.1988 20.4167 16.537 19.8225 15.2029 18.8213C13.8685 19.8232 12.2073 20.4167 10.4078 20.4167C7.59238 20.4167 4.58481 18.953 2.94455 16.682L2.92393 16.6534C2.78506 16.4615 2.60386 16.211 2.45851 15.8841C2.304 15.5365 2.21283 15.1612 2.14145 14.7038C1.96923 13.6003 2.20448 12.8704 2.49793 11.96L2.5229 11.8826L3.66243 8.34216L3.68331 8.27732C4.01955 7.23254 4.30305 6.35166 4.6141 5.65922C4.94358 4.92576 5.35385 4.28372 6.00975 3.79414C6.6693 3.30182 7.39788 3.09737 8.188 3.00396C8.927 2.91657 9.82928 2.91662 10.8884 2.91666H29.1095Z" fill="#F4F5F7"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 29.1667C10 28.2462 10.7462 27.5 11.6667 27.5H18.3333C19.2538 27.5 20 28.2462 20 29.1667C20 30.0872 19.2538 30.8333 18.3333 30.8333H11.6667C10.7462 30.8333 10 30.0872 10 29.1667Z" fill="#F4F5F7"/>
            </svg>

        <div className="navbar-text">
            <span>Inventory</span>
            <span>Management</span></div>
        </div>
        <ul className={`links ${rotate ? 'show2': ''}`}>
                <li className="nav-text">
                    <span className={`${rotate ? 'show3': ''}`}>
                    Features {rotate ? (<i className='bx bx-chevron-up' onClick={() => setRotate(prevState => !prevState)}   ></i>) : 
                        (<i className='bx bx-chevron-down' onClick={() => setRotate(prevState => !prevState)} ></i>)}
                    </span>
                    <div className={`innerLi ${rotate ? 'show' : 'hidden'}`}>
                        <div className="feature2">
                        Features {rotate ? (<i className='bx bx-chevron-up' onClick={() => setRotate(prevState => !prevState)}   ></i>) : 
                        (<i className='bx bx-chevron-down' onClick={() => setRotate(prevState => !prevState)} ></i>)}



                        </div>
                        <div className="popFeatures">
                            <div className="box2 purchase">
                               <div className="icon">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66602 31.0763V13.4237C6.66602 8.667 6.66602 6.28867 8.13048 4.81097C9.59495 3.33325 11.952 3.33325 16.666 3.33325H23.3327C28.0467 3.33325 30.4037 3.33325 31.8682 4.81097C33.3327 6.28867 33.3327 8.667 33.3327 13.4237V31.0763C33.3327 33.5958 33.3327 34.8554 32.5627 35.3513C31.3045 36.1618 29.3595 34.4623 28.3812 33.8454C27.5728 33.3356 27.1688 33.0808 26.7202 33.0661C26.2355 33.0501 25.8242 33.2946 24.9508 33.8454L21.766 35.8539C20.9068 36.3956 20.4773 36.6666 19.9993 36.6666C19.5213 36.6666 19.0918 36.3956 18.2327 35.8539L15.0479 33.8454C14.2396 33.3356 13.8354 33.0808 13.3869 33.0661C12.9022 33.0501 12.4909 33.2946 11.6175 33.8454C10.6393 34.4623 8.69413 36.1618 7.43593 35.3513C6.66602 34.8554 6.66602 33.5958 6.66602 31.0763Z" stroke="url(#paint0_linear_5645_10318)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M18.334 18.3333H13.334" stroke="url(#paint1_linear_5645_10318)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M23.334 11.6667H13.334" stroke="url(#paint2_linear_5645_10318)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_5645_10318" x1="33.3327" y1="3.33325" x2="0.81236" y2="29.3495" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E43E2B"/>
                                    <stop offset="1" stop-color="#7E2218"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_5645_10318" x1="18.334" y1="18.3333" x2="17.9494" y2="20.2563" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E43E2B"/>
                                    <stop offset="1" stop-color="#7E2218"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_5645_10318" x1="23.334" y1="11.6667" x2="23.136" y2="13.6469" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E43E2B"/>
                                    <stop offset="1" stop-color="#7E2218"/>
                                    </linearGradient>
                                    </defs>
                                    </svg>
                                </div>
                                <div className="drop-content">
                                    <h4 className="h4">
                                        Purchasing
                                    </h4>
                                    <div className="list">
                                        <span>- Purchase requests</span>
                                        <span>- Purchase orders</span>
                                        <span>- Purchase receives</span>
                                        <span>- Vendor payments</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box2 invent">
                                <div className='icon'>    
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www. w3.org/2000/svg">
                                    <path d="M18.334 10H35.0007" stroke="url(#paint0_linear_5645_10335)" stroke-width="2.5" stroke-linecap="round"/>
                                    <path d="M18.334 20H35.0007" stroke="url(#paint1_linear_5645_10335)" stroke-width="2.5" stroke-linecap="round"/>
                                    <path d="M18.334 30H35.0007" stroke="url(#paint2_linear_5645_10335)" stroke-width="2.5" stroke-linecap="round"/>
                                    <path d="M5 12.3215C5 12.3215 6.66667 13.4078 7.5 15.0001C7.5 15.0001 10 8.75008 13.3333 6.66675" stroke="url(#paint3_linear_5645_10335)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5 30.6548C5 30.6548 6.66667 31.7412 7.5 33.3333C7.5 33.3333 10 27.0833 13.3333 25" stroke="url(#paint4_linear_5645_10335)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_5645_10335" x1="35.0007" y1="10" x2="34.8811" y2="11.9928" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E43E2B"/>
                                    <stop offset="1" stop-color="#7E2218"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_5645_10335" x1="35.0007" y1="20" x2="34.8811" y2="21.9928" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E43E2B"/>
                                    <stop offset="1" stop-color="#7E2218"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_5645_10335" x1="35.0007" y1="30" x2="34.8811" y2="31.9928" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E43E2B"/>
                                    <stop offset="1" stop-color="#7E2218"/>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_5645_10335" x1="13.3333" y1="6.66675" x2="5" y2="15.0001" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E43E2B"/>
                                    <stop offset="1" stop-color="#7E2218"/>
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_5645_10335" x1="13.3333" y1="25" x2="5" y2="33.3333" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E43E2B"/>
                                    <stop offset="1" stop-color="#7E2218"/>
                                    </linearGradient>
                                    </defs>
                                    </svg>
                                </div>

                                <div className='drop-content'>
                                    <h4 className='h4'>
                                    Inventory
                                    </h4>
                                    
                                    <div className='list'>
                                        <span>- Inventory Adjustments</span>
                                        <span>- Product Moves</span>
                                        <span>- Material Consumption</span>
                                    </div>
                                </div> 
                            </div>
                            <div className="box2 ware">
                                <div className='icon'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16602 20.0001C4.16602 12.5362 4.16602 8.80423 6.48475 6.48548C8.8035 4.16675 12.5354 4.16675 19.9993 4.16675C27.4632 4.16675 31.1952 4.16675 33.514 6.48548C35.8327 8.80423 35.8327 12.5362 35.8327 20.0001C35.8327 27.4639 35.8327 31.1959 33.514 33.5147C31.1952 35.8334 27.4632 35.8334 19.9993 35.8334C12.5354 35.8334 8.8035 35.8334 6.48475 33.5147C4.16602 31.1959 4.16602 27.4639 4.16602 20.0001Z" stroke="url(#paint0_linear_5645_10322)" stroke-width="2.5"/>
                                    <path d="M4.16602 20H35.8327" stroke="url(#paint1_linear_5645_10322)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21.666 11.6667H28.3327" stroke="url(#paint2_linear_5645_10322)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M13.7493 13.7499C14.8999 13.7499 15.8327 12.8172 15.8327 11.6666C15.8327 10.516 14.8999 9.58325 13.7493 9.58325C12.5988 9.58325 11.666 10.516 11.666 11.6666C11.666 12.8172 12.5988 13.7499 13.7493 13.7499Z" stroke="url(#paint3_linear_5645_10322)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M13.7493 30.4167C14.8999 30.4167 15.8327 29.4839 15.8327 28.3333C15.8327 27.1827 14.8999 26.25 13.7493 26.25C12.5988 26.25 11.666 27.1827 11.666 28.3333C11.666 29.4839 12.5988 30.4167 13.7493 30.4167Z" stroke="url(#paint4_linear_5645_10322)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21.666 28.3333H28.3327" stroke="url(#paint5_linear_5645_10322)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_5645_10322" x1="35.8327" y1="4.16675" x2="4.16602" y2="35.8334" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E43E2B"/>
                                    <stop offset="1" stop-color="#7E2218"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_5645_10322" x1="35.8327" y1="20" x2="35.7696" y2="21.998" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E43E2B"/>
                                    <stop offset="1" stop-color="#7E2218"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_5645_10322" x1="28.3327" y1="11.6667" x2="28.0393" y2="13.6227" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E43E2B"/>
                                    <stop offset="1" stop-color="#7E2218"/>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_5645_10322" x1="15.8327" y1="9.58325" x2="11.666" y2="13.7499" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E43E2B"/>
                                    <stop offset="1" stop-color="#7E2218"/>
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_5645_10322" x1="15.8327" y1="26.25" x2="11.666" y2="30.4167" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E43E2B"/>
                                    <stop offset="1" stop-color="#7E2218"/>
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_5645_10322" x1="28.3327" y1="28.3333" x2="28.0393" y2="30.2892" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E43E2B"/>
                                    <stop offset="1" stop-color="#7E2218"/>
                                    </linearGradient>
                                    </defs>
                                    </svg>
                                </div>
                                
                                <div className='drop-content'>
                                    <h4 className='h4'>
                                    Warehousing
                                    </h4>

                                    <div className='list'>
                                        <span>- Multi-warehouse Management</span>
                                        <span>- Transfer Orders</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box2 order">
                                 <div className='icon'>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.5 29.1666L30 26.2499H26.9012C25.1547 26.2499 24.2813 26.2499 23.5445 25.8801C22.8075 25.5104 22.323 24.8293 21.3542 23.4668L16.4235 16.533C15.4547 15.1707 14.9703 14.4895 14.2334 14.1197C13.4964 13.7499 12.6231 13.7499 10.8765 13.7499H10M27.5 10.8333L30 13.7499H26.9012C25.1547 13.7499 24.2813 13.7499 23.5445 14.1197C22.8075 14.4895 22.323 15.1707 21.3542 16.533M10 26.2499H10.8765C12.6231 26.2499 13.4964 26.2499 14.2334 25.8801C14.9703 25.5104 15.4547 24.8293 16.4235 23.4668" stroke="url(#paint0_linear_5645_10332)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.16602 20.0001C4.16602 12.5362 4.16602 8.80423 6.48475 6.48548C8.8035 4.16675 12.5354 4.16675 19.9993 4.16675C27.4632 4.16675 31.1952 4.16675 33.514 6.48548C35.8327 8.80423 35.8327 12.5362 35.8327 20.0001C35.8327 27.4639 35.8327 31.1959 33.514 33.5147C31.1952 35.8334 27.4632 35.8334 19.9993 35.8334C12.5354 35.8334 8.8035 35.8334 6.48475 33.5147C4.16602 31.1959 4.16602 27.4639 4.16602 20.0001Z" stroke="url(#paint1_linear_5645_10332)" stroke-width="2.5"/>
                                <defs>
                                <linearGradient id="paint0_linear_5645_10332" x1="30" y1="10.8333" x2="11.7359" y2="30.7578" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#E43E2B"/>
                                <stop offset="1" stop-color="#7E2218"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_5645_10332" x1="35.8327" y1="4.16675" x2="4.16602" y2="35.8334" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#E43E2B"/>
                                <stop offset="1" stop-color="#7E2218"/>
                                </linearGradient>
                                </defs>
                                </svg></div>
                                
                                <div className='drop-content'>
                                    <h4 className='h4'>
                                    Order Management
                                    </h4>

                                    <div className='list'>
                                        <span>- Invoicing</span>
                                        <span>- Reporting</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box2 fulfill">

                                <div className='icon'>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.596 6.66675L34.0918 8.29298C34.7602 9.0195 35.0943 9.38276 34.9768 9.69143C34.8592 10.0001 34.3867 10.0001 33.4415 10.0001C31.326 10.0001 28.7952 9.6583 26.8518 10.7889C25.6505 11.4879 24.8138 12.7087 23.3987 15.0001M5 30.0001H7.6347C10.8479 30.0001 12.4545 30.0001 13.8103 29.2112C15.0118 28.5122 15.8484 27.2914 17.2637 25.0001" stroke="url(#paint0_linear_5645_10329)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M32.596 33.3333L34.0918 31.7072C34.7602 30.9805 35.0943 30.6173 34.9768 30.3087C34.8592 30 34.3867 30 33.4415 30C31.326 30 28.7952 30.3418 26.8518 29.2112C25.496 28.4223 24.6048 26.9692 22.8225 24.0627L17.8397 15.9373C16.0574 13.0309 15.1662 11.5777 13.8103 10.7888C12.4545 10 10.8479 10 7.6347 10H5" stroke="url(#paint1_linear_5645_10329)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <linearGradient id="paint0_linear_5645_10329" x1="35" y1="6.66675" x2="12.3846" y2="35.7437" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#E43E2B"/>
                                <stop offset="1" stop-color="#7E2218"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_5645_10329" x1="35" y1="10" x2="12.3846" y2="39.0769" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#E43E2B"/>
                                <stop offset="1" stop-color="#7E2218"/>
                                </linearGradient>
                                </defs>
                                </svg></div>

                               <div className="drop-content">
                                    <h4 className='h4'>
                                    Order Fulfillment
                                    </h4>

                                    <div className="list">
                                        <span>- Backorders</span>
                                        <span>- Returns</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </li>
        </ul>

    </nav>
  );
}


export default NavForInventory
