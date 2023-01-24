import { useAudioRecorder } from '@sarafhbk/react-audio-recorder';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { toast } from 'react-hot-toast';

import { fetchFileUpload, maximumAcceptedFileDuration } from '@features/fileImport';

import { Button } from '@components/Button';

import { Pause } from '@icons/Pause';
import { Record } from '@icons/Record';
import { Resume } from '@icons/Resume';
import { Stop } from '@icons/Stop';
import { Upload } from '@icons/Upload';
import speechRecord from '@icons/speech-record.svg';

import { wait } from '../../utils';

export const SpeechRecordTab = ({
	setFile,
	setProgress,
	setController,
	setIsModalFormOpen,
	setUploadedFileToken,
}) => {
	const [fileFromUrl, setFileFromUrl] = useState(null);
	const [defaultDuration, setDefaultDuration] = useState(null);
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

	const handleStopRecording = useCallback(() => {
		const formattedDuration = new Date(timer * 1000).toISOString().substring(14, 19);

		setDefaultDuration(formattedDuration);
		stopRecording();
	}, [stopRecording, timer]);

	useEffect(() => {
		if (errorMessage) {
			toast.error(errorMessage);
		}
	}, [errorMessage]);

	useEffect(() => {
		(async () => {
			if (audioResult && status === 'idle') {
				const response = await fetch(audioResult);
				const blob = await response.blob();
				const fileFromUrl = new File([blob], `Voiceloft - ${new Date().toDateString()}`);

				setFile(fileFromUrl);
				setFileFromUrl(fileFromUrl);
			}
		})();
	}, [audioResult, status, setFile]);

	useEffect(() => {
		if (timer && timer >= maximumAcceptedFileDuration) {
			const formattedDuration = new Date(timer * 1000).toISOString().substring(14, 19);

			handleStopRecording();
			toast.error(
				`Duration of the recorded file is too large ${formattedDuration}). Maximum accepted file duration is 10 minutes.`
			);
		}
	}, [handleStopRecording, timer]);

	const handleUpload = async () => {
		if (!fileFromUrl) {
			toast.error('Sorry we could not detect the file. 🥲');
			return;
		}

		const controller = new AbortController();
		// NOTE: An AbortController or its signal can not be reused nor reset.
		// If you need to "reset" it, you have to create a new AbortController instance and use that instead for each new request.
		setController(controller);

		const uploadedFileToken = await fetchFileUpload(fileFromUrl, setProgress, controller);

		setFileFromUrl(null);

		if (uploadedFileToken) {
			setUploadedFileToken(uploadedFileToken);
			setProgress(0);
			setController(null);
			await wait(500);
			setIsModalFormOpen(true);
		}
	};

	return (
		<div className="speech-record-wrapper">
			<Image src={speechRecord} alt="Start recording" />
			<h2>Click on microphone and start recording</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
			{audioResult && status === 'idle' && (
				<AudioPlayer
					timeFormat="mm:ss"
					className="audio-result"
					src={audioResult}
					defaultDuration={defaultDuration}
					customControlsSection={['MAIN_CONTROLS']}
				/>
			)}
			{status !== 'idle' && <em className="timer">{new Date(timer * 1000).toISOString().substr(11, 8)}</em>}
			{audioResult && status === 'idle' && (
				<>
					<Button className="action-button" onClick={handleUpload} icon={<Upload />}>
						Upload
					</Button>
					<Button className="action-button record-again" onClick={handleStopRecording} icon={<Record />}>
						Record Again
					</Button>
				</>
			)}
			{(!audioResult || status !== 'idle') && (
				<Button
					className="action-button"
					onClick={status === 'idle' ? startRecording : handleStopRecording}
					icon={status === 'idle' ? <Record /> : <Stop />}
				>
					{status === 'idle' ? 'Record' : 'Stop'}
				</Button>
			)}
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
