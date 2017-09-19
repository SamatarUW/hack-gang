import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import List from './src/components/List';
import Tag from './src/components/Tag';

const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Open World'} />
		<List />
		<Tag 
			tagArray={	
				[['Basketball', 'Ionicons', 'ios-basketball'], 
				['Soccer', 'FontAwesome', 'soccer-ball-o'], 
				['Tennis', 'Ionicons', 'ios-tennisball']]
			} 
		/>
	</View>
);

// Render it to the device
export default App;
