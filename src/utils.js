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
	const currentTranscriptElement = document.querySelector(`[data-time="${getCurrentTimeInSeconds(event.srcElement.currentTime)}"]`);

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
