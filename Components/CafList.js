'use strict';

var React = require('react-native');
var Icon = require('FAKIconImage');
var {
  Navigator,
  StyleSheet,
  View,
  Image,
  Text,
  ListView,
  TouchableHighlight,
  PixelRatio,
} = React;

var getColor = require('../Utils/Colors');
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
        <View style={styles.listItem}>
          <Image source={rowData.image} style={styles.listItemImage}>
            <View style={[styles.listItemWrapper, cardColor(rowData.bgcolor)]}>
              <Text style={styles.listItemText}>{rowData.title}</Text>
              <Text style={styles.listItemSub}>{rowData.time} MIN</Text>
            </View>
          </Image>
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
          renderRow={(rowData) => this.renderItems(rowData)}/>
        <View style={styles.bar}>
            <Icon 
              name='ion|ios-plus-empty'
              size={40}
              color='white'
              style={styles.plus}/>
        </View>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: Fonts.plutoMed,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  list: {
    paddingTop: 15,
  },
  listItem: {
    flex: 1,
    alignItems: 'stretch',
    height: 150,
    overflow: 'hidden',
    marginTop: -12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'transparent',
  },
  listItemWrapper: {
    flex: 1,
    padding: 10,
  },
  listItemText: {
    marginTop: 80,
    fontFamily: Fonts.archMed,
    fontSize: 24,
    color: 'white',
  },
  listItemSub: {
    marginTop: -5,
    fontFamily: Fonts.plutoMed,
    fontSize: 12,
    color: 'rgba(255,255,255,0.4)',
  },
  bar: {
    height: 50,
    backgroundColor: getColor('dgray'),
  },
  plus: {
    height: 50,
    width: 50,
  },
});

var cardColor = function(color) {
  return {
    backgroundColor: getColor(color, 0.3),
  };
}

module.exports = CafList;