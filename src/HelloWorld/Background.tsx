import {AbsoluteFill, Img, staticFile} from 'remotion';
const bgStyles: React.CSSProperties = {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	mixBlendMode: 'color-dodge',
	filter: 'tem',
};
export default function Background(): JSX.Element {
	return (
		<AbsoluteFill style={{backgroundColor: '#110524'}}>
			<Img src={staticFile('bg.png')} style={bgStyles} />
		</AbsoluteFill>
	);
}
