import {AbsoluteFill, Img, staticFile} from 'remotion';
const bgStyles: React.CSSProperties = {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
};
export default function Background(): JSX.Element {
	return (
		<AbsoluteFill>
			<Img src={staticFile('stream-starts.png')} style={bgStyles} />
		</AbsoluteFill>
	);
}
