import * as React from 'react';
import Quantik from './game';
import QuantikNavBar from './quantikNavBar';

import './style/quantikPage.css'


const QuantikPage: React.FunctionComponent = (props) => {
  return (
    <div className='quantikPage'>
        <QuantikNavBar />
        <Quantik />
        {/* <Result /> */}
    </div>
  );
};

export default QuantikPage;
