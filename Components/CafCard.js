'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var Colors = require('../Utils/Colors');

var CafCard = React.createClass({
  render: function() {
    return (
      <View style={styles.card}>
        <Text>{this.props.title}</Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Colors.red,
  }
});

module.exports = CafCard;