'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var Track = function Track(_ref) {
  var className = _ref.className;
  var included = _ref.included;
  var offset = _ref.offset;
  var length = _ref.length;
  var additionalTrackStyles = _ref.additionalTrackStyles;

  var style = mergeOptions({
    left: offset + '%',
    width: length + '%',
    visibility: included ? 'visible' : 'hidden'
  }, additionalTrackStyles);

  return _react2['default'].createElement('div', { className: className, style: style });
};

exports['default'] = Track;
module.exports = exports['default'];