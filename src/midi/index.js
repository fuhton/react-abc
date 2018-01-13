import React, { Component } from 'react';
import PropTypes from 'prop-types';

import abc from 'abcjs';
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

Midi.defaultProps = {
  el: null,
  engraverParams: {},
  parserParams: {},
  renderParams: {},
  soundfontUrl: 'https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/',
};

export default Midi;
