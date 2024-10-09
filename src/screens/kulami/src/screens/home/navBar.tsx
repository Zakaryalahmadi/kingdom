import * as React from 'react';
import {GiPlayButton} from 'react-icons/gi'
import {AiFillBug, AiFillBook,AiOutlineUsergroupDelete,AiOutlineMore,AiOutlineDownCircle, AiOutlineSwap, AiOutlineExclamation} from 'react-icons/ai';
import logo from '../../assets/images/logo.png';

import './styles/navBar.scss'
import { useTranslation } from 'react-i18next';

const NavBar: React.FC = () => {

    //gerer la trad
    const [t, i18n] = useTranslation();

    function handleTranslation(e: any){
        const lng = e.target.value;
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    }

    

    return <>
        <main >
            <div className='navbar'>
                {/* some links */}
                <div>
                    <nav className='nb-links'>
                        <ul>
                            <li><a href='#' className='nb-logo'><img width="100px" src={logo} alt="" /></a></li>
                            
                            <li><a href='#'><AiFillBug /> <span className='space'></span>{t("problems")}</a></li>
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



                <div className='nb-options'>
                    <div className='nb-langage-selector-container'>
                        
                        <select id="langage" className='nb-select' onChange={handleTranslation}>
                        
                            <option value="fr" className="fr">Francais</option>
                            <option value="en">Anglais</option>
                            
                        </select>
                        <span className='nb-arrow-dropdown'><AiOutlineDownCircle/></span>
                    </div>

                    <p>
                        {/* <button className='nb-theme-btn'><AiOutlineSwap/> Interface claire</button> */}
                    </p>
                    

                    <div className='nb-user-circle2-1'></div>
                    <div className='nb-user-circle2-2'></div>
                    <div className='nb-user-circle2-3'></div>
                    
                </div>

            </div>
        </main>
    </>;
};

export default NavBar;
