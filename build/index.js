'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function getIn(object, path) {
  var stack = path.split('.');
  var current = object;
  while (stack.length > 1) {
    current = current[stack.shift()];
  }
  return current[stack.shift()];
}

function updateIn(object, path, value) {
  var stack = path.split('.');
  var current = object;
  while (stack.length > 1) {
    current = current[stack.shift()];
  }
  current[stack.shift()] = value;
  return object;
}

function setPartialState(component, path, value) {
  component.setState(updateIn(component.state, path, value));
}

exports['default'] = {
  linkState: function linkState(path) {
    return {
      value: getIn(this.state, path),
      requestChange: setPartialState.bind(null, this, path)
    };
  }
};
module.exports = exports['default'];