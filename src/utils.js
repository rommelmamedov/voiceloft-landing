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

export const getCurrentTimeInSeconds = currentTime => {
	let minutes = Math.floor(currentTime / 60);
	minutes = minutes >= 10 ? minutes : '0' + minutes;
	currentTime = Math.floor(currentTime % 60);
	currentTime = currentTime >= 10 ? currentTime : '0' + currentTime;
	return minutes + ':' + currentTime;
};

export const getElementsCoordinates = element => {
	const rect = element.getBoundingClientRect();

	return {
		left: rect.left + window.scrollX,
		top: rect.top + window.scrollY,
	};
};
