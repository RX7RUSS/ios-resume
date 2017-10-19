import React, { Component } from 'react';
import { CardSection } from './common';
import { Text,
        TouchableWithoutFeedback,
        TouchableOpacity,
        View,
        LayoutAnimation
      } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if(expanded) {
      return (
        <CardSection>
          <Text style={{ flex:1, paddingLeft: 25, fontSize: 16 }}>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableOpacity
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    paddingLeft: 15,
    paddingTop: 20
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
