export const getProgressStyle = ({ isAudioPlaying, audio, style }) =>
	isAudioPlaying
		? {
				animationDuration: `${audio?.duration}s`,
				backgroundColor: style.progressColor,
				animationName: 'progress',
				animationFillMode: 'forwards',
				animationTimingFunction: 'linear',
		  }
		: undefined;
