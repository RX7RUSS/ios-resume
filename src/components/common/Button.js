import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} >
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontFamily: 'Avenir-Black',
    alignSelf: 'center',
    color: '#000',
    fontSize: 12,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#e1eae9',
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  }
};

export { Button };
