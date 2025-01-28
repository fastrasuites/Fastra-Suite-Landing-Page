import Raect from 'react';
import { Link } from 'react-router-dom';

const PopUp = ({setShowPopUp, showPopUp}) => {


    return (
        <div className={` ${showPopUp ? 'pop' : 'hidden'}`} onClick={() => setShowPopUp(prevState => !prevState)}>
            <div className="gridPopUp" onClick={(e) => e.stopPropagation()}>
                
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
                        Inventory Management
                        </h4>
                        <span>Tracking, controlling, optimizing stock for efficiency.</span>
                    </div>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        Project Costing
                        </h4>
                        <span>budget-focused, resource-sensitive, and outcome-oriented</span>
                    </div>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.625 13.75C20.625 13.75 34.375 23.8766 34.375 27.5C34.375 31.1236 20.625 41.25 20.625 41.25" stroke="currentColor" stroke-width="3.4375" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </div>
                <div className="box">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.6667 2.91663C32.3314 2.91663 26.25 8.62536 26.25 15.8278C26.25 19.2776 27.657 22.4017 29.925 24.7048C29.9845 24.9384 29.9129 25.6788 29.1517 26.7712C28.7623 27.2503 28.654 27.8992 28.8671 28.4788C29.0799 29.0581 29.5827 29.4828 30.1896 29.5955C32.2679 29.9821 34.8488 29.4067 36.6905 28.4274C37.5408 28.587 38.8005 28.7399 39.6667 28.7389C47.002 28.7389 53.0833 23.0302 53.0833 15.8278C53.0833 8.62536 47.002 2.91663 39.6667 2.91663ZM36.1485 14.5833C35.182 14.5833 34.3985 15.3668 34.3985 16.3333C34.3985 17.2998 35.182 18.0833 36.1485 18.0833H36.1674C37.1338 18.0833 37.9174 17.2998 37.9174 16.3333C37.9174 15.3668 37.1338 14.5833 36.1674 14.5833H36.1485ZM43.1485 14.5833C42.182 14.5833 41.3985 15.3668 41.3985 16.3333C41.3985 17.2998 42.182 18.0833 43.1485 18.0833H43.1674C44.1338 18.0833 44.9174 17.2998 44.9174 16.3333C44.9174 15.3668 44.1338 14.5833 43.1674 14.5833H43.1485Z" fill="currentColor"/>
                        <path d="M9.33398 28.5833C9.33398 24.073 12.9903 20.4166 17.5007 20.4166C22.011 20.4166 25.6674 24.073 25.6674 28.5833C25.6674 33.0936 22.011 36.75 17.5007 36.75C12.9903 36.75 9.33398 33.0936 9.33398 28.5833Z" fill="currentColor"/>
                        <path d="M8.92789 41.243C14.1825 38.363 20.8194 38.363 26.0739 41.243C27.0805 41.7645 29.2827 42.9097 30.4116 43.9268C31.1076 44.554 31.911 45.4983 32.0603 46.7565C32.2255 48.1474 31.5416 49.3439 30.4718 50.2819C28.726 51.8128 26.5777 53.0831 23.788 53.0831H11.2139C8.42429 53.0831 6.27601 51.8128 4.53 50.2819C3.46036 49.3439 2.77634 48.1474 2.94154 46.7565C3.09094 45.4983 3.89438 44.554 4.59041 43.9268C5.71928 42.9097 7.92132 41.7645 8.92789 41.243Z" fill="currentColor"/>
                        <defs>
                        <linearGradient id="paint0_linear_4926_10277" x1="53.0833" y1="2.91663" x2="26.283" y2="29.7499" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3B7DED"/>
                        <stop offset="1" stop-color="#224787"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_4926_10277" x1="25.6674" y1="20.4166" x2="9.33406" y2="36.75" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3B7DED"/>
                        <stop offset="1" stop-color="#224787"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_4926_10277" x1="32.0849" y1="39.083" x2="21.1618" y2="61.8403" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3B7DED"/>
                        <stop offset="1" stop-color="#224787"/>
                        </linearGradient>
                        </defs>
                        </svg>

                    <div>
                        <h4>
                        CRM
                        </h4>
                        <span>Customer-centric, relationship-building, and data-driven.</span>
                    </div>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.625 13.75C20.625 13.75 34.375 23.8766 34.375 27.5C34.375 31.1236 20.625 41.25 20.625 41.25" stroke="currentColor" stroke-width="3.4375" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </div>
                <div className="box">
                    <svg width="56" height="60" viewBox="0 0 56 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0856 6.41663C15.8103 6.4166 17.2278 6.41658 18.3747 6.52562C19.5664 6.63892 20.6452 6.8822 21.6265 7.48354C22.6007 8.08053 23.4198 8.89962 24.0169 9.87383C24.6182 10.8551 24.8613 11.9339 24.9747 13.1256C25.0837 14.2724 25.0837 15.69 25.0837 17.4146V17.5853C25.0837 19.3099 25.0837 20.7275 24.9747 21.8743C24.8613 23.066 24.6182 24.1448 24.0169 25.1261C23.4198 26.1003 22.6007 26.9194 21.6265 27.5165C20.6452 28.1178 19.5664 28.3609 18.3747 28.4743C17.2278 28.5833 15.8103 28.5833 14.0857 28.5833H13.915C12.1904 28.5833 10.7728 28.5833 9.626 28.4743C8.4343 28.3609 7.35548 28.1178 6.3742 27.5165C5.39999 26.9194 4.58089 26.1003 3.98391 25.1261C3.38256 24.1448 3.13929 23.066 3.02598 21.8743C2.91695 20.7275 2.91697 19.3099 2.91699 17.5853V17.4147C2.91697 15.69 2.91695 14.2725 3.02598 13.1256C3.13929 11.9339 3.38256 10.8551 3.98391 9.87383C4.58089 8.89962 5.39999 8.08053 6.3742 7.48354C7.35548 6.8822 8.4343 6.63892 9.626 6.52562C10.7728 6.41658 12.1904 6.4166 13.915 6.41663H14.0856Z" fill="currentColor"/>
                        <path d="M14.0856 34.4166C15.8103 34.4166 17.2278 34.4166 18.3747 34.5256C19.5664 34.639 20.6452 34.8821 21.6265 35.4834C22.6007 36.0805 23.4198 36.8995 24.0169 37.8739C24.6182 38.8551 24.8613 39.934 24.9747 41.1257C25.0837 42.2725 25.0837 43.69 25.0837 45.4146V45.5854C25.0837 47.3099 25.0837 48.7274 24.9747 49.8743C24.8613 51.0659 24.6182 52.1448 24.0169 53.126C23.4198 54.1004 22.6007 54.9194 21.6265 55.5165C20.6452 56.1178 19.5664 56.3609 18.3747 56.4743C17.2278 56.5833 15.8103 56.5833 14.0857 56.5833H13.915C12.1904 56.5833 10.7728 56.5833 9.626 56.4743C8.4343 56.3609 7.35548 56.1178 6.3742 55.5165C5.39999 54.9194 4.58089 54.1004 3.98391 53.126C3.38256 52.1448 3.13929 51.0659 3.02598 49.8743C2.91695 48.7274 2.91697 47.3099 2.91699 45.5854V45.4148C2.91697 43.6902 2.91695 42.2725 3.02598 41.1257C3.13929 39.934 3.38256 38.8551 3.98391 37.8739C4.58089 36.8995 5.39999 36.0805 6.3742 35.4834C7.35548 34.8821 8.4343 34.639 9.626 34.5256C10.7728 34.4166 12.1904 34.4166 13.915 34.4166H14.0856Z" fill="currentColor"/>
                        <path d="M41.5332 3.26671C40.7793 3.11366 39.9989 3.03333 39.1999 3.03333C32.7565 3.03333 27.5332 8.25667 27.5332 14.7C27.5332 21.1433 32.7565 26.3667 39.1999 26.3667C45.6431 26.3667 50.8665 21.1433 50.8665 14.7C50.8665 13.9009 50.7862 13.1206 50.6332 12.3667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M39.2005 11.2C37.9118 11.2 36.8672 11.9835 36.8672 12.95C36.8672 13.9165 37.9118 14.7 39.2005 14.7C40.4892 14.7 41.5339 15.4835 41.5339 16.45C41.5339 17.4165 40.4892 18.2 39.2005 18.2M39.2005 11.2C40.2165 11.2 41.0807 11.687 41.4011 12.3667M39.2005 11.2V10.0333M39.2005 18.2C38.1846 18.2 37.3203 17.713 37 17.0333M39.2005 18.2V19.3667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M45.0312 8.86886L49.9031 3.99429M50.8646 8.26014L50.7267 4.6534C50.7267 3.80332 50.2192 3.27366 49.2946 3.20686L45.6498 3.03552" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M42.0857 34.4166C43.8103 34.4166 45.2278 34.4166 46.3746 34.5256C47.5663 34.639 48.6452 34.8821 49.6264 35.4834C50.6008 36.0805 51.4198 36.8995 52.0169 37.8739C52.6182 38.8551 52.8613 39.934 52.9747 41.1257C53.0837 42.2725 53.0837 43.69 53.0837 45.4146V45.5854C53.0837 47.3099 53.0837 48.7274 52.9747 49.8743C52.8613 51.0659 52.6182 52.1448 52.0169 53.126C51.4198 54.1004 50.6008 54.9194 49.6264 55.5165C48.6452 56.1178 47.5663 56.3609 46.3746 56.4743C45.2278 56.5833 43.8103 56.5833 42.0857 56.5833H41.9149C40.1904 56.5833 38.7729 56.5833 37.626 56.4743C36.4344 56.3609 35.3555 56.1178 34.3743 55.5165C33.3999 54.9194 32.5809 54.1004 31.9838 53.126C31.3825 52.1448 31.1394 51.0659 31.026 49.8743C30.917 48.7274 30.917 47.3099 30.917 45.5854V45.4148C30.917 43.6902 30.917 42.2725 31.026 41.1257C31.1394 39.934 31.3825 38.8551 31.9838 37.8739C32.5809 36.8995 33.3999 36.0805 34.3743 35.4834C35.3555 34.8821 36.4344 34.639 37.626 34.5256C38.7729 34.4166 40.1904 34.4166 41.9149 34.4166H42.0857Z" fill="currentColor"/>
                    </svg>

                    <div>
                        <h4>
                        Finance
                        </h4>
                        <span>Numbers-driven, value-oriented, and risk-aware.</span>
                    </div>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.625 13.75C20.625 13.75 34.375 23.8766 34.375 27.5C34.375 31.1236 20.625 41.25 20.625 41.25" stroke="currentColor" stroke-width="3.4375" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </div>
                <div className="box">
                    <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.083 18C18.083 12.5232 22.5229 8.08337 27.9997 8.08337C33.4765 8.08337 37.9163 12.5232 37.9163 18C37.9163 23.4769 33.4765 27.9167 27.9997 27.9167C22.5229 27.9167 18.083 23.4769 18.083 18Z" fill="currentColor"/>
                        <path d="M9.91699 47.1666C9.91699 38.2248 18.276 31.4166 28.0003 31.4166C37.7247 31.4166 46.0837 38.2248 46.0837 47.1666V48.9166H9.91699V47.1666Z" fill="currentColor"/>
                        <path d="M16.8727 11.6023C15.7875 13.4856 15.1667 15.6703 15.1667 18C15.1667 21.2483 16.3735 24.2146 18.3632 26.4754C17.7172 26.6544 17.0365 26.75 16.3334 26.75C12.1453 26.75 8.75 23.3549 8.75 19.1667C8.75 14.9785 12.1453 11.5834 16.3334 11.5834C16.5147 11.5834 16.6946 11.5897 16.8727 11.6023Z" fill="currentColor"/>
                        <path d="M20.501 29.7432C13.7936 32.0299 8.43234 37.3114 7.24572 44.25H2.91699V42.5C2.91699 35.0903 8.92383 29.0834 16.3337 29.0834C17.7885 29.0834 19.1892 29.3148 20.501 29.7432Z" fill="currentColor"/>
                        <path d="M48.7542 44.25H53.083V42.5C53.083 35.0903 47.0761 29.0834 39.6664 29.0834C38.2115 29.0834 36.8108 29.3148 35.499 29.7432C42.2064 32.0299 47.5675 37.3114 48.7542 44.25Z" fill="currentColor"/>
                        <path d="M37.6367 26.4754C38.2828 26.6544 38.9637 26.75 39.6667 26.75C43.8548 26.75 47.2501 23.3549 47.2501 19.1667C47.2501 14.9785 43.8548 11.5834 39.6667 11.5834C39.4854 11.5834 39.3055 11.5897 39.1273 11.6023C40.2125 13.4856 40.8334 15.6703 40.8334 18C40.8334 21.2483 39.6266 24.2146 37.6367 26.4754Z" fill="currentColor"/>
                        <defs>
                        <linearGradient id="paint0_linear_4926_10292" x1="37.9163" y1="8.08337" x2="18.083" y2="27.9167" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#593BED"/>
                        <stop offset="1" stop-color="#332287"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_4926_10292" x1="46.0837" y1="31.4166" x2="32.3611" y2="59.7767" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#593BED"/>
                        <stop offset="1" stop-color="#332287"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_4926_10292" x1="18.3632" y1="11.5834" x2="4.64722" y2="20.2771" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#593BED"/>
                        <stop offset="1" stop-color="#332287"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_4926_10292" x1="20.501" y1="29.0834" x2="5.49869" y2="46.4768" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#593BED"/>
                        <stop offset="1" stop-color="#332287"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_4926_10292" x1="53.083" y1="29.0834" x2="38.0807" y2="46.4768" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#593BED"/>
                        <stop offset="1" stop-color="#332287"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear_4926_10292" x1="47.2501" y1="11.5834" x2="33.534" y2="20.2773" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#593BED"/>
                        <stop offset="1" stop-color="#332287"/>
                        </linearGradient>
                        </defs>
                    </svg>

                    <div>
                        <h4>
                        HRM
                        </h4>
                        <span></span>
                    </div>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.625 13.75C20.625 13.75 34.375 23.8766 34.375 27.5C34.375 31.1236 20.625 41.25 20.625 41.25" stroke="currentColor" stroke-width="3.4375" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default PopUp