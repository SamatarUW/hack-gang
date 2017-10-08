import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Slider from 'react-native-slider';

class SliderContainer extends Component {
	renderChildren() {
		return React.Children.map(this.props.children, (child) => {
			if (child.type === Slider) {
				const value = this.state.value;
				return React.cloneElement(child, {
					value: value,
					onValueChange: (val) => this.setState({ value: val }),
				});
			} else {
				return child;
			}
		});
	}

	render() {
		return (
			<View>
				<View style={styles.titleContainer}>
					<Text style={styles.caption} numberOfLines={1}>{this.props.caption}</Text>
				</View>
				{this.renderChildren()}
			</View>
		);
	}
}

const styles = {
  container: {
    margin: 20,
    paddingBottom: 20,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  caption: {
    //flex: 1,
  },
  value: {
    flex: 1,
    textAlign: 'right',
    marginLeft: 10,
  }
};

export default SliderContainer;
