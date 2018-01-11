import React from 'react';
import ReactDOM from 'react-dom';
import Abc from '../../src';

const notation = `
M: 4/4
L: 1/16
K: A
%%staves {V1 V2}
V: V1 clef=treble
V: V2 clef=bass
[V: V1]C16| D16| D16| D16|
[V: V2]B,,16| B,,16| D,16| D,16|
`;

const App = () => (
  <div>
    <Abc notation={notation} />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
