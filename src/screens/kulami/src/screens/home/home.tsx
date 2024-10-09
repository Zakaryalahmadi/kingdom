import * as React from 'react';
import GameModes from './gameModes';
import NavBar from './navBar';
import Board  from '../../Board/Board.js';
import './styles/home.scss'


const Home: React.FunctionComponent = (props) => {
    return <>
        <div className="Home">
            <NavBar />
            <Board/>
            {/* <GameModes /> */}
        </div>
    </>;
};

export default Home;
