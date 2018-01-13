# Midi ABC

Implement a MIDI player to playback the passed notation.

## Usage

The below example is using ES6.
```
import { Midi } from 'react-abc';

export default ({ notation}) => <Midi notation={notation} />;
```

## Props

| Prop | Description | Required |
| --- | --- | --- |
| `notation` | A string of `ABC` notation | Required |
| `soundfontUrl` | A string location of the soundfont file | |
| `el` | A DOM element (i.e. `document.getElementById('element')`) or a DOM id string (i.e. `example`) | |
| `engraverParams` | | |
| `parserParams` | | |
| `renderParams` | | |
