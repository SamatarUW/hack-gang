import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = () => {
  const { 
	headerContentStyle,
	headerTextStyle
  } = styles;

  return (
	<Card>
		<CardSection>
			<View style={headerContentStyle}>
				<Text style={headerTextStyle}>Preferred Range</Text>
			</View>
		</CardSection>
		
		<CardSection>
			<View style={headerContentStyle}>
				<Text style={headerTextStyle}>Favourite Tags</Text>
			</View>
		</CardSection>
	</Card>
  );
};

const styles = { 
  headerContentStyle: {
	flexDirection: 'column',
	justifyContent: 'space-around'
  },
  headerTextStyle: {
	fontSize: 18
  },
  thumbnailStyle: {
	height: 50,
	width: 50
  }
};

export default AlbumDetail;
