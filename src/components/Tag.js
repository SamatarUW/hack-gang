import React, { Component } from 'react';
import { View } from 'react-native';
import Button from './Button';

//Takes in an array of Tag strings as prop
class Tags extends Component {

	/*createTag(tag) {
		return (
			<Button>
				{tag}
			</Button>
		);
	}*/

	/*createAllTags() {
		this.props.tagArray.forEach((tag) => {
			this.createTag(tag);
		});
	}*/

	createAllTags() {
		return this.props.tagArray.map(function (tag, i) {
			return (
				<Button key={i}>
					{tag}
				</Button>
			);
		});
	}

	render() {
		return (
			<View style={{ display: 'flex', flexDirection: 'row', flex: 1}}>
				{this.createAllTags()}
			</View>
		);
	}
}

export default Tags;
