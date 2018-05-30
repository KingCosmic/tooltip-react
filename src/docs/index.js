import React from 'react';
import { render } from 'react-dom';
import Tooltip from '../lib';
import './styles.css';

const Demo = () => {
  return (
    <div className='container'>
      <h1>Demo with examples of the component</h1>

      <h1> default </h1>

      <div className='defaultContainer'>
        <Tooltip content='top'>
          <a>top</a>
        </Tooltip>

        <Tooltip content='right' pos='right'>
          <a>right</a>
        </Tooltip>

        <Tooltip content='bottom' pos='bottom'>
          <a>bottom</a>
        </Tooltip>

        <Tooltip content='left' pos='left'>
          <a>left</a>
        </Tooltip>
      </div>

      <h1> Hover with delayHide </h1>
      <Tooltip content='Delay!' delayHide={1000}>
        <a>You shall not pass!</a>
      </Tooltip>

      <h1> Click with delayHide </h1>
      <Tooltip content='Clicked Delay!' type='click' delayHide={1000}>
        <a>Clicker Chipper</a>
      </Tooltip>
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
