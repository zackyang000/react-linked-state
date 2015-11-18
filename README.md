react-linked-state
==========

Deep path two-way binding for React.

  [![NPM Version](https://img.shields.io/npm/v/react-linked-state.svg?style=flat)](https://www.npmjs.org/package/react-linked-state)
  [![npm](https://img.shields.io/npm/dm/react-linked-state.svg?style=flat)](https://www.npmjs.org/package/react-linked-state)
  [![Build Status](https://travis-ci.org/TossShinHwa/react-linked-state.svg?branch=master&style=flat)](https://travis-ci.org/TossShinHwa/react-linked-state)
  [![License](http://img.shields.io/npm/l/react-linked-state.svg?style=flat)](https://raw.githubusercontent.com/TossShinHwa/react-linked-state/master/LICENSE)

```js
npm install --save react-linked-state
```

## Usage

```js
var LinkedStateMixin = require('react-linked-state');
```

Use it like official's [Two-Way Binding Helpers](https://facebook.github.io/react/docs/two-way-binding-helpers.html), the only different is this module support **deep path**.

```js
var LinkedStateMixin = require('react-linked-state');

var WithLink = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {data: {message: 'Hello!'}};
  },
  render: function() {
    return <input type="text" valueLink={this.linkState('data.message')} />;
  }
});
```
