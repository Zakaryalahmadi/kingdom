import * as React from 'react';

import './selectionPage.css';
import manette from './assets/icones/manette.png';
import arrowNext from './assets/icones/arrowRight.png';
import arrowLeft from './assets/icones/arrowLeft.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SelectionPage: React.FunctionComponent = () => {

    let titleStyle :any;
    let titleStyle2 :any;
    let kulamiBoardStyle :any;
    let quantikBoardStyle: any;

    const [quantikTitle, setQuantikTitle] = useState(false);

    const [link,setLink] = useState(0);

    React.useEffect( () =>{
        let title = document.getElementById('title');
        let title2 = document.getElementById('title2');
        let kulamiBoard = document.getElementById('kulamiBoard');
        let quantikBoard = document.getElementById('quantikBoard');

        kulamiBoardStyle = kulamiBoard!.style;
        quantikBoardStyle = quantikBoard!.style;

        titleStyle = title!.style;
        titleStyle2 = title2!.style;
    })


    console.log(link);
    function witchLink(l : number){
        if(l === 0) return '/kulami';
        else if(l%2 === 0) return '/quantik';

        return '/kulami';
    }
    function handleClick(){

        

        setLink(prev => prev+1);

        

        if(titleStyle.display === "block" && titleStyle.opacity === "1"){
            titleStyle.opacity = "0";
            titleStyle.transform = "translateX(400px)";
        }else{
            titleStyle.opacity = "1";
            titleStyle.display = "block";
            titleStyle.transform = "translateX(0)";
            setQuantikTitle(false);
        }  
        if(titleStyle2.opacity === "0"){
            titleStyle2.opacity = "1";
            
            setQuantikTitle(true);
            
        }else{
            titleStyle2.opacity = "0";
            
        }

        
        if(kulamiBoardStyle.display === "block" && kulamiBoardStyle.opacity === "1"){
            kulamiBoardStyle.opacity = "0";
            kulamiBoardStyle.transform = "scale(0)";
            // kulamiBoardStyle.transform = "translateX(400px)";
        }else{
            kulamiBoardStyle.opacity = "1";
            kulamiBoardStyle.transform = "scale(1)";
            kulamiBoardStyle.display = "block";
            // kulamiBoardStyle.transform = "translateX(0)";
        }  

        if(quantikBoardStyle.opacity === "0"){
            quantikBoardStyle.opacity = "1";
            quantikBoardStyle.transform = "scale(1)";
            quantikBoardStyle.display = "block";
        }else{
            quantikBoardStyle.opacity = "0";
            quantikBoardStyle.transform = "scale(0)";
            // quantikBoardStyle.display = "none";
        }
       
    }

  return (
    <div className='mp'>
        <div onClick={handleClick}  className="mp-btn-left">
            <img src={arrowLeft} alt="" />
        </div>

        <div className='boards'>
            <div id='kulamiBoard' className="mp-kulami-board">

            </div>

            <div id='quantikBoard' className="mp-quantik-board">

            </div>
        </div>

        <div className="mp-infos">
            <div>
                <h1 className="game-title-kulami" id='title'>Kulami</h1>
                <h1 className="game-title-quantik" id='title2'>Quantik</h1>
                <p className="game-desc">
                    {quantikTitle ? 'Quantik' : 'Kulami'} is the perfect game for those who love to think and make <br /> <strong>tactical choices</strong> <br />
                    Get ready to fight for <strong>victory</strong>
                </p>

            </div>

            <div>
                <ul>
                    <li>

                        <Link  className="mp-btn-play" to={witchLink(link)}>
                            <img src={manette} alt="" />
                            <p className='btn-play-text'>Play</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

        <div onClick={handleClick} className="mp-btn-right">
            <img src={arrowNext} alt="" />
        </div>
    </div>
  );
};

export default SelectionPage;
