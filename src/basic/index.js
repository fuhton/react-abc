import React, { Component } from 'react';
import PropTypes from 'prop-types';

import abc from 'abcjs';

class Basic extends Component {
  componentDidMount() {
    const {
      el,
      engraverParams,
      notation,
      parserParams,
      renderParams,
    } = this.props;

    abc.renderAbc(
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

Basic.propTypes = {
  el: PropTypes.node,
  engraverParams: PropTypes.object,
  notation: PropTypes.string.isRequired,
  parserParams: PropTypes.object,
  renderParams: PropTypes.object,
};

Basic.defaultProps = {
  el: null,
  engraverParams: {},
  parserParams: {},
  renderParams: {},
};

export default Basic;
