# Basic ABC

Most basic implementation using the core of the API.

## Usage

The below example is using ES6.
```
import { Basic } from 'react-abc';

export default ({ notation}) => <Basic notation={notation} />;
```

## Props

| Prop | Description | Required |
| --- | --- | --- |
| `notation` | A string of `ABC` notation | Required |
| `el` | A DOM element (i.e. `document.getElementById('element')`) or a DOM id string (i.e. `example`) | |
| `engraverParams` | | |
| `parserParams` | | |
| `renderParams` | | |
