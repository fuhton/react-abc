import React from 'react';
import { Midi } from '../../src';

import notation from './data';

export default () => (
  <div>
    <Midi notation={notation} />
  </div>
);
