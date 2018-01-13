import React from 'react';
import { Midi } from '../../src';

import notation from './notation';

export default () => (
  <div>
    <Midi notation={notation} />
  </div>
);
