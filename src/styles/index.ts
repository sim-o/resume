import {Font, StyleSheet} from '@react-pdf/renderer';

// disable hyphenation
Font.registerHyphenationCallback((w) => [w]);

// register fonts
Font.register({ family: 'Lato', src: 'Lato-Regular.ttf', fontWeight: 'normal' });
Font.register({ family: 'Lato', src: 'Lato-Light.ttf', fontWeight: 'light' });
Font.register({ family: 'Lato', src: 'Lato-Thin.ttf', fontWeight: 'thin' });
Font.register({ family: 'Poppins', src: 'Poppins-Regular.ttf'});

const mainTextColor = '#39424B';

export const styles = StyleSheet.create({
	page: {
		backgroundColor: 'white',
		fontFamily: 'Lato',
		fontSize: 9,
		padding: 20,
		color: mainTextColor,
	},
	header: {
	  flexDirection: 'row',
		backgroundColor: '#F8CAB9',
		fontFamily: 'Poppins',
		margin: 10,
		overflow: 'hidden',
	},
	portrait: {
		flex: 1.6,
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		paddingRight: 50,
	},
	portraitImage: {
		aspectRatio: 1,
		maxHeight: 80,
	},
	headerTitle: {
		flexDirection: 'column',
		flex: 4,
		margin: 12,
		marginLeft: 0,
	},
	name: {
		fontSize: 18,
	},
	label: {
		marginTop: -4,
		color: '#90867f',
	},
	headerInfo: {
		flex: 2,
		textAlign: 'right',
		margin: 12,
  },
	basicSummary: {
		marginBottom: 14,
	},
	main: {
		flexDirection: 'row',
		margin: 10,
	},
	mainColumn: {
		flexDirection: 'column',
		flex: 6,
	},
	columnTitle: {
		fontSize: 12,
		flexDirection: 'column',
		fontWeight: 'light',
	},
	columnTitleUnderline: {
		height: 0.5,
		width: 40,
		backgroundColor: mainTextColor,
		marginTop: 6,
		marginBottom: 8,
	},
	
	skills: {
		flex: 1.6,
		paddingRight: 40,
	},
	skillGroup: {
		marginBottom: 16,
	},
	skill: {
		flexDirection: 'row',
		marginBottom: 2,
	},
	skillName: { flex: 1},
	skillPips: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginLeft: 8 },
	pipOn: { height: 4, width: 6, backgroundColor: 'black', border: '1px solid black', marginRight: 1},
	pipOff: {height: 4, width: 6, border: '1px solid black', marginRight: 1},
	
	workList: {
		flexDirection: 'column',
		marginTop: 8,
	},
	position: {
		fontSize: 10,
		flex: 1,
	},
	location: {
		color: '#888888',
		marginBottom: 4,
		fontSize: 10,
		alignItems: 'flex-end',
	},
	summary: {},
	highlights: {},
	highlight: {},
	section: {
		flexDirection: 'column',
		marginBottom: 14
	},
	sectionSubtitle: {
		flexDirection: 'row',
		marginBottom: 4,
	},
	sectionTitle: {
		flexDirection: 'row',
		fontFamily: 'Poppins',
		alignItems: 'flex-end',
	},
	sectionTitleMain: {
		flex: 1,
		fontSize: 12,
		alignItems: 'flex-end',
	},
	sectionDate: {
		textAlign: 'right',
		fontSize: 10,
		color: '#888888',
		alignItems: 'flex-end',
	},

	link: {color: mainTextColor},

	dotContainer: {flexDirection: 'row', marginLeft: 8, marginTop: 2},
	dot: {marginRight: 2},
	dotText: {},
});

