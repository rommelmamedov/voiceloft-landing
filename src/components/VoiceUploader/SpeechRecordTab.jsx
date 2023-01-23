import { useAudioRecorder } from '@sarafhbk/react-audio-recorder';
import Image from 'next/image';

import { Button } from '@components/Button';

import { Pause } from '@icons/Pause';
import { Record } from '@icons/Record';
import { Resume } from '@icons/Resume';
import { Stop } from '@icons/Stop';
import speechRecord from '@icons/speech-record.svg';

export const SpeechRecordTab = () => {
	const {
		// Format
		audioResult,
		errorMessage,
		pauseRecording,
		resumeRecording,
		startRecording,
		status,
		stopRecording,
		timer,
	} = useAudioRecorder();

	console.log('🚀 ~ file: SpeechRecordTab.js:20 ~ SpeechRecordTab ~ timer', timer);
	console.log('🚀 ~ file: SpeechRecordTab.js:20 ~ SpeechRecordTab ~ audioResult', audioResult);

	return (
		<div className="speech-record-wrapper">
			<Image src={speechRecord} alt="Start recording" />
			<h2>Click on microphone and start recording</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
			<div>
				{audioResult && <audio controls src={audioResult} />}
				<p>
					Status : <b>{status}</b>
				</p>
				<p>
					Error Message : <b>{errorMessage}</b>
				</p>
				<div>
					<p>{new Date(timer * 1000).toISOString().substr(11, 8)}</p>
					<div>
						<button onClick={startRecording}>Start</button>
						<button onClick={stopRecording}>Stop</button>
						<button onClick={pauseRecording}>Pause</button>
						<button onClick={resumeRecording}>Resume</button>
					</div>
				</div>
			</div>
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
