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
      title: rowData.title,
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
    });
  },
  renderItems: function(rowData) {
    return (
      <TouchableHighlight onPress={()=> this.onSelectItem(rowData)}>
        <View style={[styles.listItem, listItemColor(rowData.id)]}>
          <Text numberOfLines={1} style={styles.listItemText}>{rowData.title.toUpperCase()}</Text>
        </View>
      </TouchableHighlight>
    )
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
        <ListView
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
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 15,
  },
  listItem: {
    paddingTop: 20,
    paddingBottom: 25,
    marginTop: -10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  listItemText: {
    fontFamily: Fonts.pluto,
    fontSize: 16,
    color: Colors.ltan,
    textAlign: 'center',
  },
});

var listItemColor = function(n) {
  if (n % 2 == 0) {
    return {
      backgroundColor: Colors.red,
    };
  } else {
    return {
      backgroundColor: Colors.dred,
    };
  }
}

module.exports = CafList;