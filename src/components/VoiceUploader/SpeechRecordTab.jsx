import { useAudioRecorder } from '@sarafhbk/react-audio-recorder';
import Image from 'next/image';
import { useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { toast } from 'react-hot-toast';

import { getAudioFileDuration, maximumAcceptedFileDuration } from '@features/fileImport';

import { Button } from '@components/Button';

import { Pause } from '@icons/Pause';
import { Record } from '@icons/Record';
import { Resume } from '@icons/Resume';
import { Stop } from '@icons/Stop';
import speechRecord from '@icons/speech-record.svg';

export const SpeechRecordTab = () => {
	const {
		audioResult,
		errorMessage,
		pauseRecording,
		resumeRecording,
		startRecording,
		status,
		stopRecording,
		timer,
	} = useAudioRecorder();

	useEffect(() => {
		if (errorMessage) {
			toast.error(errorMessage);
		}
	}, [errorMessage]);

	useEffect(() => {
		(async () => {
			if (audioResult) {
				// const duration = await getAudioFileDuration(audioResult);
				// const formattedDuration = new Date(duration * 1000).toISOString().substring(14, 19);
				// if (duration > maximumAcceptedFileDuration) {
				// 	stopRecording();
				// 	toast.error(
				// 		`File duration is too larger (${file.name} - ${formattedDuration}). Maximum accepted file duration is 10 minutes.`
				// 	);
				// 	return;
				// }
			}
		})();
	}, [audioResult, stopRecording]);

	console.log('🚀 ~ file: SpeechRecordTab.js:20 ~ SpeechRecordTab ~ timer', timer);
	console.log('🚀 ~ file: SpeechRecordTab.js:20 ~ SpeechRecordTab ~ audioResult', audioResult);

	return (
		<div className="speech-record-wrapper">
			<Image src={speechRecord} alt="Start recording" />
			<h2>Click on microphone and start recording</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
			{audioResult && (
				<AudioPlayer
					timeFormat="mm:ss"
					className="audio-result"
					listenInterval={500}
					src={audioResult}
					// defaultDuration={<>25:17</>}
					defaultCurrentTime={<>00:00</>}
					customControlsSection={['MAIN_CONTROLS']}
				/>
			)}
			{status !== 'idle' && <em className="timer">{new Date(timer * 1000).toISOString().substr(11, 8)}</em>}
			<Button
				className="action-button"
				onClick={status === 'idle' ? startRecording : stopRecording}
				icon={status === 'idle' ? <Record /> : <Stop />}
			>
				{status === 'idle' ? 'Record' : 'Stop'}
			</Button>
			{status !== 'idle' && (
				<Button
					className="action-button"
					onClick={status === 'paused' ? resumeRecording : pauseRecording}
					icon={status === 'paused' ? <Resume /> : <Pause />}
				>
					{status === 'paused' ? 'Resume' : 'Pause'}
				</Button>
			)}
		</div>
	);
};
