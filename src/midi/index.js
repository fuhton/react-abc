import React, { Component } from 'react';
import PropTypes from 'prop-types';

import renderMidi from 'abcjs/src/api/abc_tunebook_midi';
import { midiProps } from '../defaults/props';
import './style.css';

class Midi extends Component {
  componentDidMount() {
    const {
      el,
      engraverParams,
      midiParams,
      notation,
      parserParams,
      renderParams,
    } = this.props;

    renderMidi(
      el || this.el,
      notation,
      engraverParams,
      parserParams,
      midiParams,
      renderParams,
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

Midi.propTypes = {
  el: PropTypes.node,
  engraverParams: PropTypes.object,
  midiParams: PropTypes.object,
  notation: PropTypes.string.isRequired,
  parserParams: PropTypes.object,
  renderParams: PropTypes.object,
};

Midi.defaultProps = midiProps;

export default Midi;
