import {Font, StyleSheet} from '@react-pdf/renderer';

// disable hyphenation
Font.registerHyphenationCallback((w) => [w]);

// register fonts
Font.register({ family: 'Roboto', src: 'Roboto-Regular.ttf' });
Font.register({ family: 'Poppins', src: 'Poppins-Regular.ttf'});


export const styles = StyleSheet.create({
	page: {
		backgroundColor: 'white',
		fontFamily: 'Roboto',
		fontSize: 10,
		padding: 20,
		color: '#644454',
	},
	header: {
	  flexDirection: 'row',
		backgroundColor: '#e8ecf1',
		fontFamily: 'Poppins',
		margin: 10,
		borderRadius: 4,
		overflow: 'hidden',
	},
	portrait: {
		aspectRatio: 1,
		flex: 1,
		alignItems: 'center',
	},
	portraitImage: {
		aspectRatio: 1,
		marginRight: 24
	},
	headerTitle: {
		flexDirection: 'column',
		flex: 3,
		margin: 12,
	},
	name: {
		fontSize: 18,
	},
	label: {
		fontSize: 10,
		color: '#888888'
	},
	headerInfo: {
		flex: 1,
		textAlign: 'right',
		margin: 12,
  },
	title: {
		color: '#ff0000',
		fontFamily: 'Poppins',
		size: 80
	},
	basicSummary: {
		margin: 10,
	},
	main: {
		flexDirection: 'row',
		margin: 10,
	},
	mainColumn: {
		flexDirection: 'column',
		flex: 4,
	},
	columnTitle: {
		fontSize: 16,
	},
	skills: {
		flex: 1,
		paddingRight: 12,
	},
	skillGroup: {
		marginBottom: 12,
		fontSize: 10,
	},
	skill: {
		fontSize: 8,
		flexDirection: 'row',
	},
	skillName: { flex: 1},
	skillPips: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginLeft: 8 },
	pipOn: { height: 4, width: 6, backgroundColor: 'black', border: '1px solid black', marginRight: 1},
	pipOff: {height: 4, width: 6, border: '1px solid black', marginRight: 1},
	workList: {
		flexDirection: 'column'
	},
	location: {
		color: '#888888',
		marginBottom: 4
	},
	summary: {},
	highlights: {
		marginTop: 8,
	},
	highlight: {},
	section: {
		flexDirection: 'column',
		marginBottom: 14
	},
	sectionTitle: {
		flexDirection: 'row',
		fontFamily: 'Poppins',
	},
	sectionTitleMain: {
		flex: 1,
		fontSize: 12,
	},
	sectionDate: {
		textAlign: 'right',
		fontSize: 10,
		color: '#888888'
	},
});

