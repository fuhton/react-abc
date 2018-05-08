'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _abcjs = require('abcjs');

var _abcjs2 = _interopRequireDefault(_abcjs);

var _props2 = require('../defaults/props');

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Midi = function (_Component) {
  _inherits(Midi, _Component);

  function Midi() {
    _classCallCheck(this, Midi);

    return _possibleConstructorReturn(this, (Midi.__proto__ || Object.getPrototypeOf(Midi)).apply(this, arguments));
  }

  _createClass(Midi, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          el = _props.el,
          engraverParams = _props.engraverParams,
          midiParams = _props.midiParams,
          notation = _props.notation,
          parserParams = _props.parserParams,
          renderParams = _props.renderParams,
          soundfontUrl = _props.soundfontUrl;


      _abcjs2.default.midi.soundfontUrl = soundfontUrl;

      _abcjs2.default.renderMidi(el || this.el, notation, engraverParams, parserParams, midiParams, renderParams);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        ref: function ref(input) {
          _this2.el = input;
        }
      });
    }
  }]);

  return Midi;
}(_react.Component);

Midi.propTypes = {
  el: _propTypes2.default.node,
  engraverParams: _propTypes2.default.object,
  midiParams: _propTypes2.default.object,
  notation: _propTypes2.default.string.isRequired,
  parserParams: _propTypes2.default.object,
  renderParams: _propTypes2.default.object,
  soundfontUrl: _propTypes2.default.string
};

Midi.defaultProps = _props2.midiProps;

exports.default = Midi;