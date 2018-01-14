import React, { Component } from 'react';
import PropTypes from 'prop-types';

import abc from 'abcjs';

import { midiProps } from '../defaults/props';
import './style.css';

class Midi extends Component {
  componentDidMount() {
    const {
      el,
      engraverParams,
      notation,
      parserParams,
      renderParams,
      soundfontUrl,
    } = this.props;

    abc.midi.soundfontUrl = soundfontUrl;

    abc.renderMidi(
      el || this.el,
      notation,
      engraverParams,
      parserParams,
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
  notation: PropTypes.string.isRequired,
  parserParams: PropTypes.object,
  renderParams: PropTypes.object,
  soundfontUrl: PropTypes.string,
};

Midi.defaultProps = midiProps;

export default Midi;
