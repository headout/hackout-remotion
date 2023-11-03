import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Sora';
import Background from './Background';

export const Timer: React.FC = () => {
	const {durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();

	const totalSeconds = Math.floor((durationInFrames - frame) / 30);
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds - minutes * 60;
	return (
		<AbsoluteFill>
			<Background />
			<AbsoluteFill
				style={{
					color: '#FECD1A',
					fontSize: 300,
					fontFamily: loadFont().fontFamily,
					transform: 'translate(24%, 35%)',
				}}
			>
				{minutes < 10 ? 0 : ''}
				{minutes} : {seconds < 10 ? 0 : ''}
				{seconds}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
