'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Navigator,
  StyleSheet,
} = React;

var Colors = require('./Utils/Colors');
var CafList = require('./Components/CafList');
var CafCard = require('./Components/CafCard');

var CafApp = React.createClass({

  renderScene: function(route, nav) {
    if (route.scene == 'card') {
      return (
        <CafCard 
          title={route.title}
          navigator={nav} />
      );
    } else {
      return (
        <CafList
          title={route.title}
          navigator={nav} />
      );
    }
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ title: "Caffeinated", }}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromBottom;
        }} />
    );
  },
});

var styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: Colors.red,
  },
});

AppRegistry.registerComponent('Caffeinated', () => CafApp);
