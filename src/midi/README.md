# Midi ABC

Implement a MIDI player to playback the passed notation.

## Usage

The below example is using ES6.
```
import { Midi } from 'react-abc';

const notation = 'CDEF GABc|';

export default ({ notation}) => <Midi notation={notation} />;
```

If you wish to override the default CSS, you can use the included CSS and modify it further. Currently, we don't offer much support or modification beyond this.

## Props

| Prop             | Description                                    | Required |
| ---              | ---                                            | --- |
| `notation`       | A string of `ABC` notation                     | Required |
| `soundfontUrl`   | A string location of the soundfont file. It must have a trailing slash. If not provided , the component will use `https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/` as it's endpoint. | |
| `el`             | A DOM element (i.e. `document.getElementById('element')`) or a DOM id string (i.e. `example`). If not provided, the component will use ref on the outputted DIV as the target element | |
| `engraverParams` | [Link](../defaults/README.md#engraver-params)  | |
| `parserParams`   | [Link](../defaults/README.md#parser-params)    | |
| `midiParams`     | [Link](../defaults/README.md#midi-params)      | |
| `renderParams`   | [Link](../defaults/README.md#render-params)    | |
