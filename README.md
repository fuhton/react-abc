# React Abc Component

React component for displaying Abc based notation. Wraps [Abc.js](https://github.com/paulrosen/abcjs) for use in your React libraries

---
## Installation
Installation can be achieved via NPM.
```
npm install react-abc
```
---
## Usage
React-ABC takes a notation prop and outputs the rendered ABC notation. You can optionally add an `el` prop to attach to a specific DOM or React element.

To see it in use, check the example here - [http://fuhton.github.io/react-abc/example/](http://fuhton.github.io/react-abc/example/)

### ES6
```javascript

import React from 'react';
import Abc from 'react-abc';

var App = React.createClass({

  render: function() {
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
    return(
      <Abc notation={notation} />
    );
  }

});

export default App;
```

---
## Properties *(Options)*

### **notation** | *string* | **required**
The notation string to render

### **el** | *DOM Element* or *React Element*
Optional element to attach the notation to. Will default to an internal element.

### **engraverParams** | *object* | default: {}
Optional parameters for the engraver

### **parserParams** | *object* | default: {}
Optional parameters for parsing the notation

### **renderParams** | *object* | default: {}
Optional parameters for the rendering the notation

---
## Example
An example of the component in action is available in the example folder. To see it in action you can run `npm run example` which will run the webpack build and open the example.

---
## Licence
React Abc Component is [MIT licensed](LICENSE.md)
