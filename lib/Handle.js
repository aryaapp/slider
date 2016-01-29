'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTooltip = require('rc-tooltip');

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * @param obj1
 * @param obj2
 * @returns obj3 a new object based on obj1 and obj2
 */
function mergeOptions(obj1, obj2) {
  var obj3 = {};
  for (var attrname in obj1) {
    if (obj1.hasOwnProperty(attrname)) {
      obj3[attrname] = obj1[attrname];
    }
  }
  for (var attrname in obj2) {
    if (obj2.hasOwnProperty(attrname)) {
      obj3[attrname] = obj2[attrname];
    }
  }
  return obj3;
}

var Handle = (function (_React$Component) {
  _inherits(Handle, _React$Component);

  function Handle(props) {
    _classCallCheck(this, Handle);

    _get(Object.getPrototypeOf(Handle.prototype), 'constructor', this).call(this, props);

    this.state = {
      isTooltipVisible: false
    };
  }

  _createClass(Handle, [{
    key: 'showTooltip',
    value: function showTooltip() {
      this.setState({
        isTooltipVisible: true
      });
    }
  }, {
    key: 'hideTooltip',
    value: function hideTooltip() {
      this.setState({
        isTooltipVisible: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var className = props.className;
      var tipTransitionName = props.tipTransitionName;
      var tipFormatter = props.tipFormatter;
      var offset = props.offset;
      var value = props.value;
      var dragging = props.dragging;
      var noTip = props.noTip;
      var additionalHandleStyles = props.additionalHandleStyles;

      var noTooltipStyle = { left: offset + '%' };
      var tooltipStyle = mergeOptions(noTooltipStyle, additionalHandleStyles);
      var handle = _react2['default'].createElement('div', { className: className, style: noTip ? noTooltipStyle : tooltipStyle,
        onMouseUp: this.showTooltip.bind(this),
        onMouseEnter: this.showTooltip.bind(this),
        onMouseLeave: this.hideTooltip.bind(this) });

      if (noTip) {
        return handle;
      }

      var isTooltipVisible = dragging || this.state.isTooltipVisible;
      return _react2['default'].createElement(
        _rcTooltip2['default'],
        {
          prefixCls: className.replace('slider-handle', 'tooltip'),
          placement: 'top',
          visible: isTooltipVisible,
          overlay: _react2['default'].createElement(
            'span',
            null,
            tipFormatter(value)
          ),
          delay: 0,
          transitionName: tipTransitionName },
        handle
      );
    }
  }]);

  return Handle;
})(_react2['default'].Component);

exports['default'] = Handle;

Handle.propTypes = {
  className: _react2['default'].PropTypes.string,
  offset: _react2['default'].PropTypes.number,
  tipTransitionName: _react2['default'].PropTypes.string,
  tipFormatter: _react2['default'].PropTypes.func,
  value: _react2['default'].PropTypes.number,
  dragging: _react2['default'].PropTypes.bool,
  noTip: _react2['default'].PropTypes.bool,
  additionalHandleStyles: _react2['default'].PropTypes.object
};
module.exports = exports['default'];