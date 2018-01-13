# Notation ABC

The pure notation implementation using the core of the ABC API.

## Usage

The below example is using ES6.
```
import { Notation } from 'react-abc';

const notation = 'CDEF GABc|';

export default ({ notation}) => <Notation notation={notation} />;
```

## Props

| Prop | Description | Required |
| --- | --- | --- |
| `notation` | A string of `ABC` notation | Required |
| `el` | A DOM element (i.e. `document.getElementById('element')`) or a DOM id string (i.e. `example`). If not provided, the component will use ref on the outputted DIV as the target element | |
| `engraverParams` | | |
| `parserParams` | | |
| `renderParams` | | |
