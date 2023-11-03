import {Composition} from 'remotion';
import {Timer} from './HelloWorld/Timer';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	const timerInMinutes = 1;
	return (
		<Composition
			id="Timer"
			component={Timer}
			durationInFrames={timerInMinutes * 60 * 30}
			fps={30}
			width={1920}
			height={1080}
		/>
	);
};
