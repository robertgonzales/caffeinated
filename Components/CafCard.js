'use strict';

var React = require('react-native');
var BlurView = require('react-native-blur').BlurView;
var Icon = require('FAKIconImage');
var {
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var CafStore = require('../Stores/CafStore');
var Fonts = require('../Utils/Fonts');
var getColor = require('../Utils/Colors');

var CafCard = React.createClass({
  render: function() {
    this.data = this.props.data.card;
    var divs = [];
    for (var i = 0; i < this.data.div.length; i++) {
        divs.push(
          <Text style={styles.heading}>
            {this.data.div[i].parts}
            <Text style={styles.info}>  PARTS  </Text>
            {this.data.div[i].content.toUpperCase()}
          </Text>
        );
    };
    return (
      <View style={[styles.card, cardColor(this.data.bgcolor)]}>
        <Image source={this.data.image} style={styles.image}>
          <BlurView blurType="light" style={styles.blur}>
            <View style={[styles.wrapper, cardColor(this.data.bgcolor)]}>
              <Text style={styles.title}>{this.data.title}</Text>
              <View style={styles.infobar}>
                <View style={styles.glance}>
                  <Text style={styles.subhead}>AT A GLANCE</Text>
                  {divs}
                </View>
                <View style={styles.time}>
                  <Text style={styles.subhead}>{this.data.time} MIN</Text>
                  <Icon
                    name='ion|ios-timer'
                    size={30}
                    color='white'
                    style={styles.timer}/>
                </View>
              </View>
              <View style={styles.cutaway}>
                <Image source={this.data.icon} style={styles.icon} />
              </View>
              <View style={styles.instructions}>
                <Text style={styles.subhead}>INSTRUCTIONS</Text>
                <Text style={styles.body}>{this.data.body}</Text>
              </View>
            </View>
          </BlurView>
        </Image>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    marginTop: 15,
    marginRight: 2,
    marginLeft: 2,
  },
  title: {
    padding: 20,
    textAlign: 'center',
    fontFamily: Fonts.archMed,
    fontSize: 24,
    color: 'white',
  },
  image: {
    flex: 1,
    overflow: 'hidden',
  },
  blur: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingLeft: 120,
    paddingRight: 120,
  },
  infobar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
  },
  glance: {
    // flex: 4,
  },
  time: {
    // flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontFamily: Fonts.archMedIt,
    fontSize: 14,
    color: 'white',
  },
  subhead: {
    fontFamily: Fonts.plutoMed,
    fontSize: 10,
    color: 'rgba(255,255,255,0.5)',
    marginBottom: 5,
  },
  info: {
    fontFamily: Fonts.archMedIt,
    fontSize: 10,
    color: 'rgba(255,255,255,0.5)',
  },
  body: {    
    fontFamily: Fonts.archMed,
    fontSize: 15,
    lineHeight: 20,
    color: 'white',
  },
  cutaway: {
    paddingLeft: 20,
    alignItems: 'center',
    // textAlign: 'center',
  },
  icon: {
    width: 200,
    height: 150,
    marginTop: 20,
    marginBottom: 20,
    opacity: 0.8,
  },
  timer: {
    textAlign: 'center',
    width: 30,
    height: 30,
  }
});

var cardColor = function(color) {
  return {
    backgroundColor: getColor(color, 0.3),
  };
}

module.exports = CafCard;