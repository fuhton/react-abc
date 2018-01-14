import React, { Component } from 'react';
import PropTypes from 'prop-types';

import abc from 'abcjs';
import { editorProps } from '../defaults/props';

class Editor extends Component {
  constructor(props) {
    super(props);

    this.editor = null;
  }
  componentDidMount() {
    const {
      editArea,
      editorParams,
      soundfontUrl,
    } = this.props;

    abc.midi.soundfontUrl = soundfontUrl;

    console.log('------------------------------------');
    console.log(editorParams);
    console.log('------------------------------------');

    this.editor = new abc.Editor(
      editArea,
      editorParams,
    );
  }

  render() {
    return (
      <div
        ref={(input) => { this.el = input; }}
      />
    );
  }
}

Editor.propTypes = {
  editArea: PropTypes.string.isRequired,
  editorParams: PropTypes.object,
  soundfontUrl: PropTypes.string,
};

Editor.defaultProps = editorProps;

export default Editor;
