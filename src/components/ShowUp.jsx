import Raect from 'react';
import { Link } from 'react-router-dom';

const PopUp = ({setShowPopUp, showPopUp}) => {


    return (
        <div className={` ${showPopUp ? 'pop' : 'hidden'}`} onClick={() => setShowPopUp(prevState => !prevState)}>
            <div className="gridPopUp" onClick={(e) => e.stopPropagation()}>
                 <span className={`mb-pop ${showPopUp ? 'mb-hid' : ''}`} onClick={() => setShowPopUp(prevState => !prevState)}>BACK</span>
                <Link to='/inventory'>
                <div className="box1">
                    <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00033 22.0834C8.289 22.0834 9.33366 23.1281 9.33366 24.4167V36.0834C9.33366 39.4492 9.33863 41.7387 9.56914 43.4534C9.79064 45.1008 10.1812 45.8638 10.7005 46.3832C11.2198 46.9026 11.9829 47.2932 13.6303 47.5146C15.3449 47.7451 17.6345 47.75 21.0003 47.75H35.0003C38.3662 47.75 40.6559 47.7451 42.3704 47.5146C44.0177 47.2932 44.7807 46.9026 45.3001 46.3832C45.8195 45.8638 46.2101 45.1008 46.4316 43.4534C46.6621 41.7387 46.667 39.4492 46.667 36.0834V24.4167C46.667 23.1281 47.7116 22.0834 49.0003 22.0834C50.289 22.0834 51.3337 23.1281 51.3337 24.4167V36.2479C51.3337 39.4077 51.3339 42.0131 51.0567 44.0753C50.7655 46.2401 50.1308 48.1521 48.5999 49.683C47.069 51.2139 45.1571 51.8485 42.9922 52.1395C40.93 52.4169 38.3246 52.4167 35.1651 52.4167H20.8357C17.6761 52.4167 15.0706 52.4169 13.0085 52.1395C10.8436 51.8485 8.93158 51.2139 7.40068 49.683C5.86976 48.1521 5.23516 46.2401 4.94408 44.0753C4.66685 42.0131 4.66692 39.4077 4.66699 36.2481V24.4167C4.66699 23.1281 5.71167 22.0834 7.00033 22.0834Z" fill="url(#paint0_linear_4926_10254)"/>
                    <path d="M40.7541 4.58338C42.2369 4.58333 43.5002 4.58326 44.5348 4.7056C45.641 4.83638 46.6609 5.12261 47.5842 5.81185C48.5026 6.49727 49.0769 7.39612 49.5382 8.42297C49.9738 9.39238 50.3707 10.6256 50.8413 12.0883L52.466 17.1356L52.5008 17.2441C52.9117 18.5187 53.2412 19.5405 52.9999 21.0855C52.9 21.7258 52.7724 22.2512 52.5561 22.7378C52.3526 23.1955 52.099 23.5461 51.9044 23.8148L51.8757 23.8548C49.5792 27.0342 45.3687 29.0834 41.427 29.0834C38.9077 29.0834 36.5805 28.2511 34.7124 26.8487C32.8441 28.252 30.5178 29.0834 27.9978 29.0834C25.4792 29.0834 23.1526 28.2515 21.2849 26.8499C19.4166 28.2525 17.091 29.0834 14.5717 29.0834C10.6301 29.0834 6.41952 27.0342 4.12315 23.8548L4.09428 23.8148C3.89987 23.5461 3.64619 23.1955 3.4427 22.7378C3.22638 22.2512 3.09874 21.7258 2.99881 21.0854C2.7577 19.5405 3.08705 18.5187 3.49788 17.2441L3.53284 17.1356L5.12818 12.1791L5.15742 12.0883C5.62815 10.6256 6.02505 9.39238 6.46052 8.42297C6.92179 7.39612 7.49617 6.49727 8.41443 5.81185C9.3378 5.12261 10.3578 4.83638 11.464 4.7056C12.4986 4.58326 13.7618 4.58333 15.2446 4.58338H40.7541Z" fill="url(#paint1_linear_4926_10254)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 41.3333C14 40.0446 15.0447 39 16.3333 39H25.6667C26.9554 39 28 40.0446 28 41.3333C28 42.622 26.9554 43.6667 25.6667 43.6667H16.3333C15.0447 43.6667 14 42.622 14 41.3333Z" fill="url(#paint2_linear_4926_10254)"/>
                    <defs>
                    <linearGradient id="paint0_linear_4926_10254" x1="51.3337" y1="22.0834" x2="23.6125" y2="64.7313" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E43E2B"/>
                    <stop offset="1" stop-color="#7E2218"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_4926_10254" x1="53.0818" y1="4.58337" x2="33.7595" y2="44.1466" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E43E2B"/>
                    <stop offset="1" stop-color="#7E2218"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_4926_10254" x1="28" y1="39" x2="25.2" y2="47.4" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E43E2B"/>
                    <stop offset="1" stop-color="#7E2218"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    <div>
                        <h4>
                        Inventory Management <span className="arrow-span"><i className='bx bx-right-arrow-alt'></i></span>
                        </h4>
                        <span>Tracking, controlling, optimizing stock for efficiency.</span>
                    </div>
                    <svg className="aroow" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.625 13.75C20.625 13.75 34.375 23.8766 34.375 27.5C34.375 31.1236 20.625 41.25 20.625 41.25" stroke="#353535" stroke-width="3.4375" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </div>
                </Link>
                <div className="box">
                   <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M43.0048 13.0462C40.6549 12.75 37.6874 12.75 33.9545 12.75H22.0461C18.3133 12.75 15.3457 12.75 12.9958 13.0462C10.5731 13.3517 8.58139 13.9945 6.92664 15.4431C6.3669 15.9331 5.85529 16.4791 5.39859 17.0727C4.06159 18.8104 3.47387 20.8854 3.19247 23.4248C3.1041 24.2221 3.04409 25.0875 3.0033 26.0274C2.98618 26.4224 3.30365 26.75 3.69913 26.75H11.667C12.6335 26.75 13.417 27.5335 13.417 28.5C13.417 29.4665 12.6335 30.25 11.667 30.25H3.61786C3.23253 30.25 2.91963 30.5615 2.91867 30.9467C2.91699 31.6199 2.91699 32.3201 2.91699 33.0486V33.2749C2.91697 37.2743 2.91695 40.4224 3.19247 42.9086C3.47387 45.4479 4.06159 47.523 5.39859 49.2606C5.85529 49.8542 6.3669 50.4002 6.92664 50.8902C8.58139 52.3387 10.5731 52.9816 12.9958 53.2872C15.3457 53.5833 18.3133 53.5833 22.0461 53.5833H33.9545C37.6874 53.5833 40.6549 53.5833 43.0048 53.2872C45.4275 52.9816 47.4193 52.3387 49.0741 50.8902C49.6338 50.4002 50.1453 49.8542 50.6022 49.2606C51.9392 47.523 52.5267 45.4479 52.8081 42.9086C53.0837 40.4224 53.0837 37.2743 53.0837 33.2749V33.0584C53.0837 32.3264 53.0837 31.6227 53.082 30.9467C53.0811 30.5615 52.7682 30.25 52.3827 30.25H44.3337C43.3672 30.25 42.5837 29.4665 42.5837 28.5C42.5837 27.5335 43.3672 26.75 44.3337 26.75H52.3015C52.697 26.75 53.0146 26.4224 52.9973 26.0274C52.9565 25.0875 52.8965 24.2221 52.8081 23.4248C52.5267 20.8854 51.9392 18.8104 50.6022 17.0727C50.1453 16.4791 49.6338 15.9331 49.0741 15.4431C47.4193 13.9945 45.4275 13.3517 43.0048 13.0462ZM29.7503 23.8333C29.7503 22.8668 28.9668 22.0833 28.0003 22.0833C27.0339 22.0833 26.2503 22.8668 26.2503 23.8333V24.6117C25.2839 24.8322 24.3937 25.2345 23.6505 25.7917C22.4745 26.6737 21.5837 28.0259 21.5837 29.6667C21.5837 31.3075 22.4745 32.6596 23.6505 33.5416C24.8261 34.4232 26.3696 34.9167 28.0003 34.9167C28.947 34.9167 29.7366 35.2067 30.2501 35.5917C30.7632 35.9765 30.917 36.3745 30.917 36.6667C30.917 36.9588 30.7632 37.3569 30.2501 37.7416C29.7366 38.1266 28.947 38.4167 28.0003 38.4167C26.4407 38.4167 25.4558 37.6677 25.1821 37.0874C24.7703 36.2131 23.7275 35.8383 22.8532 36.2504C21.9789 36.6622 21.6042 37.705 22.0162 38.5793C22.7859 40.2126 24.41 41.2979 26.2503 41.7195V42.5C26.2503 43.4665 27.0339 44.25 28.0003 44.25C28.9668 44.25 29.7503 43.4665 29.7503 42.5V41.7216C30.7168 41.5011 31.607 41.0988 32.3501 40.5416C33.5261 39.6596 34.417 38.3075 34.417 36.6667C34.417 35.0259 33.5261 33.6737 32.3501 32.7917C31.1746 31.9102 29.6311 31.4167 28.0003 31.4167C27.0537 31.4167 26.2641 31.1266 25.7505 30.7416C25.2374 30.3569 25.0837 29.9588 25.0837 29.6667C25.0837 29.3745 25.2374 28.9765 25.7505 28.5917C26.2641 28.2067 27.0537 27.9167 28.0003 27.9167C29.5599 27.9167 30.5448 28.6657 30.8185 29.246C31.2304 30.1203 32.2731 30.495 33.1474 30.0829C34.0217 29.6711 34.3965 28.6283 33.9844 27.754C33.2146 26.1207 31.5906 25.0355 29.7503 24.6138V23.8333Z" fill="currentColor"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9997 2.83339C30.1335 2.83339 31.9687 2.82844 33.4312 3.02507C34.9607 3.23071 36.427 3.69443 37.6161 4.88364C38.8054 6.07287 39.269 7.53902 39.4748 9.06854C39.7158 10.8628 39.6664 12.6941 39.6664 14.5001C39.6664 15.7887 38.6217 16.8334 37.333 16.8334C36.0443 16.8334 34.9997 15.7887 34.9997 14.5001C34.9997 12.2342 34.9948 10.7696 34.8497 9.69037C34.7136 8.67831 34.4938 8.3611 34.3163 8.18349C34.1387 8.00585 33.8214 7.78619 32.8094 7.65011C31.7302 7.50502 30.2656 7.50005 27.9997 7.50005C25.7338 7.50005 24.2692 7.50502 23.19 7.65011C22.1779 7.78619 21.8607 8.00585 21.6831 8.18349C21.5055 8.3611 21.2858 8.67831 21.1497 9.69037C21.0047 10.7696 20.9997 12.2342 20.9997 14.5001C20.9997 15.7887 19.955 16.8334 18.6664 16.8334C17.3777 16.8334 16.333 15.7887 16.333 14.5001C16.333 12.3661 16.3281 10.531 16.5247 9.06854C16.7303 7.53902 17.1941 6.07287 18.3833 4.88364C19.5725 3.69443 21.0387 3.23071 22.5682 3.02507C24.0307 2.82844 25.8659 2.83339 27.9997 2.83339Z" fill="currentColor"/>
                        <defs>
                        <linearGradient id="paint0_linear_4926_10310" x1="53.0837" y1="12.75" x2="13.1005" y2="61.8722" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2BA24C"/>
                        <stop offset="1" stop-color="#103C1C"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_4926_10310" x1="39.6705" y1="2.83337" x2="27.3186" y2="23.4236" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2BA24C"/>
                        <stop offset="1" stop-color="#103C1C"/>
                        </linearGradient>
                        </defs>
                    </svg>

                    <div>
                        <h4>
                        Project Costing <span className="arrow-span"><i className='bx bx-right-arrow-alt blu'></i></span>
                        </h4>
                        <span>budget-focused, resource-sensitive, and outcome-oriented</span>
                    </div>
                    <svg className="aroow" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.625 13.75C20.625 13.75 34.375 23.8766 34.375 27.5C34.375 31.1236 20.625 41.25 20.625 41.25" stroke="currentColor" stroke-width="3.4375" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </div>
                
            </div>
        </div>
    )
}

export default PopUp