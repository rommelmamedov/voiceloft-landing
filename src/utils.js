export const wait = delay => new Promise(resolve => setTimeout(resolve, delay));

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

export const highlightCurrentTranscriptElement = event => {
	const transcriptWrapper = document.getElementById('competitors-audio-transcript');
	const transcriptElements = transcriptWrapper.querySelectorAll('div');
	const currentTranscriptElement = document.querySelector(
		`[data-time="${getCurrentTimeInSeconds(event.srcElement.currentTime)}"]`
	);

	if (currentTranscriptElement) {
		transcriptElements.forEach(item => (item.dataset.active = false));
		currentTranscriptElement.dataset.active = true;

		transcriptWrapper.scroll({
			top: currentTranscriptElement.offsetTop - 849,
			left: 0,
			behavior: 'smooth',
		});
	}
};

export const formatBytes = (bytes, decimals = 2) => {
	if (!+bytes) return '0 Bytes';

	const kilobyte = 1024;
	const fixedPoint = decimals < 0 ? 0 : decimals;
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	const index = Math.floor(Math.log(bytes) / Math.log(kilobyte));

	return `${parseFloat((bytes / Math.pow(kilobyte, index)).toFixed(fixedPoint))} ${sizes[index]}`;
};
