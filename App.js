import React from 'react';
import { View, Text, Slider } from 'react-native';
import Header from './src/components/Header';
import Tag from './src/components/Tag';
import Card from './src/components/Card';
import CardSection from './src/components/CardSection';
import SliderContainer from './src/components/SliderContainer';

const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Open World'} />

		<Card>
			<View>
				<View style={styles.headerText}>
					<Text style={styles.textStyle}>Range From Your Location</Text>
				</View>
				<SliderContainer>
					<Slider
						minimumValue={1}
						maximumValue={20}
						minimumTrackTintColor='#28A2FE'
						maximumTrackTintColor='#28A2FE'
						thumbTintColor='#28A2FE'
					/>
				</SliderContainer>
			</View>
		</Card>

		<Card>
			<View style={styles.headerText}>
				<Text style={styles.textStyle}>Favourite Tags</Text>
			</View>
			<CardSection>
				<Tag 
					tagArray={	
						[['Basketball', 'Ionicons', 'ios-basketball'], 
						['Soccer', 'FontAwesome', 'soccer-ball-o'], 
						['Tennis', 'Ionicons', 'ios-tennisball'],
						['Soccer', 'FontAwesome', 'soccer-ball-o']]
					}
				/>
			</CardSection>
		</Card>

	</View>
);

const styles = {
	containerStyle: {
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'space-between'
	},
	headerText: {
		alignItems: 'center',
		paddingBottom: 20
	},
	textStyle: {
		fontSize: 25
	},
	LocationBar: {
		paddingTop: 20,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	}
};


// Render it to the device
export default App;
