import * as React from 'react';
import {GiPlayButton} from 'react-icons/gi'
import {AiFillBug, AiFillBook,AiOutlineUsergroupDelete,AiOutlineMore,AiOutlineDownCircle, AiOutlineSwap, AiOutlineExclamation} from 'react-icons/ai';

import logo from './assets/logo.png';
import './style/navBar.scss'


const QuantikNavBar: React.FC = () => {


    return <>
        <main >
            <div className='navbar'>
                {/* some links */}
                <div>
                    <nav className='nb-links'>
                        <ul>
                            
                        <li><a href='#' className='nb-logo'><img  src={logo} alt="" /></a></li>
                            <li><a href='#'><AiFillBug /> <span className='space'></span>problemes</a></li>
                            <li><a href='#'><AiFillBook/> <span className='space'></span>Apprendre</a></li>
                            <li><a href='#'><AiOutlineUsergroupDelete /> <span className='space'></span>Social</a></li>
                            <li><a href='#'><AiOutlineMore /> <span className='space'></span>Plus</a></li>
                        </ul>
                    </nav>

                    {/* login  */}
                    
                    <div className='nb-user-container'>
                        <p>
                            <button className='nb-sign'>Creer un compte</button>
                        </p>
                        <p>
                            <button className='nb-log'>Se connecter</button>
                        </p>

                        <div className='nb-user-circle-1'></div>
                        <div className='nb-user-circle-2'></div>
                        <div className='nb-user-circle-3'></div>
                    </div>

                </div>



                

            </div>
        </main>
    </>;
};

export default QuantikNavBar;
