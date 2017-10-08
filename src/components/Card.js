import React from 'react';
import { View } from 'react-native';

const Card = (props) => { 
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2, //same as border radius
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 50,
		marginBottom: 20
	}
};

export default Card;
