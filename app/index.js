import { render } from 'react-dom';
import React from 'react';
import { remote } from 'electron';

import './app.global.css';

const { createProjectDir } = remote.require('./util/fileFormat');

render(
  <div>CAN YOU SEE ME?</div>,
  document.getElementById('root')
);
