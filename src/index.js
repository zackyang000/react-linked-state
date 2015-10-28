function getIn(object, path) {
  const stack = path.split('.');
  let current = object;
  while (stack.length > 1) {
    current = current[stack.shift()];
  }
  return current[stack.shift()];
}

function updateIn(object, path, value) {
  const stack = path.split('.');
  let current = object;
  while (stack.length > 1) {
    current = current[stack.shift()];
  }
  current[stack.shift()] = value;
  return object;
}

function setPartialState(component, path, value) {
  component.setState(updateIn(component.state, path, value));
}

export default {
  linkState: function linkState(path) {
    return {
      value: getIn(this.state, path),
      requestChange: setPartialState.bind(null, this, path),
    };
  },
};
