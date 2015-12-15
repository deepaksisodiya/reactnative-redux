/**
 * Created by deepaksisodiya on 15/12/15.
 */


import React from 'react-native';

var {
  Text,
  View,
  TouchableHighlight,
  } = React;

function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  } else if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}

var createStore = require('redux').createStore;

var store = createStore(counter);

var Counter = React.createClass({

  getInitialState: function () {
    return {
      value: store.getState()
    }
  },

  componentDidMount: function() {
    store.subscribe(() => this.setCounter(store.getState()));
  },

  setCounter : function(counter){
    this.setState({
      value : counter
    });
  },

  render: function() {
    return (
      <View>
        <Text>{ this.state.value }</Text>
        <TouchableHighlight onPress={this.increment}>
          <Text>Increment</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.decrement}>
          <Text>Decrement</Text>
        </TouchableHighlight>
      </View>
    )
  },

  increment: function () {
    store.dispatch({type: 'INCREMENT'});
  },

  decrement: function () {
    store.dispatch({type: 'DECREMENT'});
  }

});

module.exports = Counter;
