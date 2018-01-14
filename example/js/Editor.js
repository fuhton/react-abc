import React from 'react';
import { Editor } from '../../src';
import { editorProps } from '../../src/defaults/props';

import notation from './data';

const id = 'react-abc-editor-id';

export default () => (
  <div>
    <textarea
      cols="50"
      defaultValue={notation}
      id={id}
      rows="20"
    />
    <div id="midi" />
    <Editor
      editArea={id}
      editorParams={{
        ...editorProps.editorParams,
        generate_midi: true,
        midi_id: 'midi',
      }}
    />
  </div>
);
