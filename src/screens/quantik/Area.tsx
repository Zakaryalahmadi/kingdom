import * as React from 'react';

import './style/cell.css'

interface IAreaProps {
    id: string;
    children : React.ReactNode;
}

const Area: React.FunctionComponent<IAreaProps> = (props) => {
  return (
    <div className={`Area Area--${props.id}`}>
        {props.children}
    </div>
  );
};

export default Area;
