import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

//Takes in an array of Tag strings as prop
class Tags extends Component {
	
	createAllTags() {
		return this.props.tagArray.map(function (tag, i) {
			console.log(tag[0]);
			let icon = '';
			const name = tag[0];
			icon += tag[2];
			if (tag[1] === 'Ionicons') {
				return (
					<View key={i} style={styles.tagStyle} >
						<Ionicons name={icon} size={40} color="#28A2FE" />
						<Text>{name}</Text>
					</View>
				);
			} else if (tag[1] === 'FontAwesome') {
				return (
					<View key={i} style={styles.tagStyle} >
						<FontAwesome name={icon} size={40} color="#28A2FE" />
						<Text>{name}</Text>
					</View>
				);
			}
		});
	}

	render() {
		return (
			<View style={styles.displayStyle}>
				{this.createAllTags()}
			</View>
		);
	}
}

const styles = {
	tagStyle: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 20
	},
	displayStyle: {
		display: 'flex',
		flexDirection: 'row',
		flex: 1,
		alignItems: 'stretch'
	}
};

export default Tags;
