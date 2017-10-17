import React, { Component } from 'react';
import ReactNative from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

class Header extends Component {
    render(props) {
      return (
        <Text style={styles.largetext}>{this.props.headerText}</Text>
    );
  };

}

const styles = StyleSheet.create({
  largetext: {
    fontFamily: 'Avenir',
    fontSize: 24,
    fontWeight: '600',
    color: '#FFF',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    paddingTop: 17,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 25,
    marginBottom: 20,
    backgroundColor: '#999',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 15,
  },
});

export { Header };
