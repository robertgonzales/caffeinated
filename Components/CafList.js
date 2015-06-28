'use strict';

var React = require('react-native');
var {
  Navigator,
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableHighlight,
} = React;

var Colors = require('../Utils/Colors');
var Fonts = require('../Utils/Fonts');
var CafStore = require('../Stores/CafStore.js')

var CafList = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(CafStore),
    };
  },
  onSelectItem: function(rowData) {
    this.props.navigator.push({
      scene: 'card',
      card: rowData,
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
    });
  },
  renderItems: function(rowData) {
    return (
      <TouchableHighlight 
        underlayColor='transparent'
        activeOpacity={1}
        onPress={()=> this.onSelectItem(rowData)}>
        <View style={[styles.listItem, cardColor(rowData.bgcolor)]}>
          <Text numberOfLines={1} style={[styles.listItemText, textColor(rowData.color)]}>{rowData.title.toUpperCase()}</Text>
        </View>
      </TouchableHighlight>
    )
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
        <ListView
          style={styles.list}
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.renderItems(rowData)}
          />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: Fonts.pluto,
    fontSize: 18,
    color: Colors.ltan,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 15,
  },
  list: {
    paddingTop: 10,
  },
  listItem: {
    paddingTop: 30,
    paddingBottom: 35,
    marginTop: -10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
  },
  listItemText: {
    fontFamily: Fonts.pluto,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
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

module.exports = CafList;