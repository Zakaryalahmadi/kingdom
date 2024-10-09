import * as React from 'react';

import {AiOutlineDownCircle} from 'react-icons/ai';
import './styles/gameModes.scss';

import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';


const GameModes: React.FC= () => {
  return <>
    <div className='gameMode'>
        

        <div className='gm-mode-container'>
            <p>
                <button className='gm-play'>Jouer </button>
            </p>

            <p>Score: </p>


            
            
           
        </div>
    </div>
  </>;
};

export default GameModes;
