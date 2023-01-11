import axios from 'axios';
import { toast } from 'react-hot-toast';

import { formatBytes, getAudioFileDuration } from '../utils';

const uploadAPIEndpoint = 'https://demo-landing.voiceloft.com/v1/upload';
// const maximumAcceptedFileDuration = 600; // NOTE: 10 Minutes in seconds.
const maximumAcceptedFileDuration = 12600; // NOTE: 10 Minutes in seconds.
// export const maximumAcceptedFileSize = 52_428_800; // NOTE: 50 Mb in bytes.
export const maximumAcceptedFileSize = 1252_428_800; // NOTE: 50 Mb in bytes.

export const acceptedFileTypes = [
	'.3gp',
	'.aa',
	'.aac',
	'.aax',
	'.act',
	'.aiff',
	'.alac',
	'.amr',
	'.ape',
	'.au',
	'.awb',
	'.dss',
	'.flac',
	'.gsm',
	'.m4a',
	'.m4b',
	'.m4p',
	'.mp3',
	'.mpc',
	'.ogg',
	'.oga',
	'.mogg',
	'.opus',
	'.ra',
	'.rm',
	'.raw',
	'.rf64',
	'.sln',
	'.tta',
	'.voc',
	'.vox',
	'.wav',
	'.wma',
	'.wv',
	'.webm',
	'.8svx',
	'.cda',
];

export const audioFileDurationValidator = file => {
	if (file.duration) {
		const formattedDuration = new Date(file.duration * 1000).toISOString().substring(14, 19);

		if (file.duration > maximumAcceptedFileDuration) {
			return {
				code: 'duration-too-large',
				message: `File duration is too larger (${file.name} - ${formattedDuration}). Maximum accepted file duration is 10 minutes.`,
			};
		}
	}

	return null;
};

export const getFilesFromEvent = async event => {
	let promises = [];
	const files = event.target?.files || event.dataTransfer?.files;

	if (files) {
		for (let index = 0; index < files.length; index++) {
			const file = files[index];

			const promise = new Promise((resolve, reject) => {
				getAudioFileDuration(file).then(duration => {
					file.duration = duration;
					resolve(file);
				});
			});

			promises.push(promise);
		}
		return await Promise.all(promises);
	}

	return event;
};

export const handleDropRejected = async ([rejection]) => {
	const { errors, file } = rejection;

	errors.forEach(({ code, message }) => {
		if (code === 'file-invalid-type') {
			toast.error(`Invalid file type (${file.type})! Only audio files are accepted.`);
		}
		if (code === 'too-many-files') {
			toast.error('Too many files! Maximum accepted number of files is 1.');
		}
		if (code === 'duration-too-large') {
			toast.error(message);
		}
		if (code === 'file-too-large') {
			toast.error(
				`File (${file.name}) - ${formatBytes(file.size)} is too large! Maximum accepted file size is ${formatBytes(
					maximumAcceptedFileSize
				)}.`
			);
		}
	});
};

export const fetchFileUpload = async (file, setProgress, controller) => {
	try {
		const formData = new FormData();
		formData.append('file', file);

		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			onUploadProgress: progressEvent => {
				const percentage = (progressEvent.loaded * 100) / progressEvent.total;
				if (percentage < 100) {
					setProgress(+percentage.toFixed(0));
				}
			},
			signal: controller.signal,
		};

		const response = await axios.post(uploadAPIEndpoint, formData, config);
		setProgress(100);
		toast.success(`${file.name} was uploaded successfully!`);
		return response.data.token;
	} catch (error) {
		if (!error.message === 'canceled') {
			console.error(error);
			toast.error(error.message);
		}
	}
};
