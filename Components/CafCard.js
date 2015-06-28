'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var CafStore = require('../Stores/CafStore');
var Fonts = require('../Utils/Fonts');
var Colors = require('../Utils/Colors');

var CafCard = React.createClass({
  render: function() {
    this.data = this.props.data.card;
    return (
      <View style={[styles.card, cardColor(this.data.bgcolor)]}>
        <Text style={[styles.title, textColor(this.data.color)]}>{this.data.title.toUpperCase()}</Text>
        <Image source={this.data.image} style={styles.image} />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 10,
  },
  title: {
    fontFamily: Fonts.pluto,
    fontSize: 18,
    padding: 30,
  },
  image: {
    width: 260,
    height: 200,
  },
});

var cardColor = function(color) {
  return {
    backgroundColor: color
  };
}

var textColor = function(color) {
  return {
    color: color
  };
}

module.exports = CafCard;