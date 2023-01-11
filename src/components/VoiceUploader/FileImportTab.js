import axios from 'axios';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDropzone } from 'react-dropzone';
import { Toaster, toast } from 'react-hot-toast';

import {
	acceptedFileTypes,
	audioFileDurationValidator,
	getFilesFromEvent,
	handleDropRejected,
	maximumAcceptedFileSize,
} from '@features/fileImport';

import { Button } from '@components/Button';

import fileImport from '@icons/file-import.svg';

// replace the old one with this one
const onUploadFile = async (file, setProgress) => {
	if (!file) {
		return;
	}

	try {
		let formData = new FormData();
		formData.append('media', file);

		const options = {
			headers: { 'Content-Type': 'multipart/form-data' },
			onUploadProgress: progressEvent => {
				const percentage = (progressEvent.loaded * 100) / progressEvent.total;
				setProgress(+percentage.toFixed(2));
			},
		};

		const {
			data: { data },
		} = await axios.post('https://demo-landing.voiceloft.com/v1/upload', formData, options);

		console.log('File was uploaded successfylly:', data);
	} catch (e) {
		console.error(e);
		const error = e.response && e.response.data ? e.response.data.error : 'Sorry! something went wrong.';
		alert(error);
	}
};

export const FileImportTab = () => {
	const [file, setFile] = useState(null);
	const [progress, setProgress] = useState(10);

	const handleDrop = useCallback(async ([file]) => {
		console.log(file);
		setFile(file);
		const res = await onUploadFile(file);
		console.log('🚀 ~ file: FileImportTab.js:69 ~ handleDrop ~ res', res);
	}, []);

	const handleError = useCallback(error => {
		console.error(error);
		toast.error(error.message);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: { 'audio/*': acceptedFileTypes },
		getFilesFromEvent,
		maxSize: maximumAcceptedFileSize,
		multiple: false,
		onDrop: handleDrop,
		onDropRejected: handleDropRejected,
		onError: handleError,
		useFsAccessApi: false,
		validator: audioFileDurationValidator,
	});

	const isUploading = true;

	if (file && isUploading) {
		return (
			<div>
				<p>Uploading...</p>
				<CircularProgressbar value={progress} text={`${progress}%`} />;<strong>{file.name}</strong>
				<button
					onClick={() => {
						setFile(null);
					}}
				>
					Cancel
				</button>
			</div>
		);
	}

	return (
		<div className="file-uploader-wrapper" {...getRootProps()}>
			<input {...getInputProps()} />
			<Image src={fileImport} alt="Drag and drop file" />
			<h2>{isDragActive ? 'Drop the file here...' : 'Drag and drop file here, or click to select file.'}</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
			<Button
				icon={
					<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
						<path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z" />
					</svg>
				}
			>
				Choose file
			</Button>
			<Toaster position="top-right" />
		</div>
	);
};
