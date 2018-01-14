# Editor ABC

Implement an Editor player to playback, display, and edit the passed notation.

## Usage

The below example is using ES6.
```
import { Editor } from 'react-abc';

const notation = 'CDEF GABc|';

const id = 'a-random-id';

export default ({ notation}) => (
  <div>
    <textarea
      defaultValue={notation}
      id={id}
    />
    <Editor
      editArea={id}
    />
  </div>
);
```

## Props

| Prop             | Description                                    | Required |
| ---              | ---                                            | --- |
| `editArea`       | The string id of the editable notation         | Required |
| `editorParams`   | [Link](../defaults/README.md#editor-params)   | |
| `soundfontUrl`   | A string location of the soundfont file. It must have a trailing slash. If not provided , the component will use `https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/` as it's endpoint. | |
