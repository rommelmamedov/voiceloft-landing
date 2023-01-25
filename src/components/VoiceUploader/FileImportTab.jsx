import Image from 'next/image';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-hot-toast';

import {
	acceptedFileTypes,
	fetchFileUpload,
	getAudioFileDuration,
	handleDropRejected,
	maximumAcceptedFileDuration,
	maximumAcceptedFileSize,
} from '@features/fileImport';

import { Button } from '@components/Button';

import fileImport from '@icons/file-import.svg';

import { wait } from '../../utils';

export const FileImportTab = ({
	setFile,
	setProgress,
	setController,
	setIsModalFormOpen,
	setUploadedFileToken,
}) => {
	const handleDropAccepted = useCallback(
		async ([file]) => {
			const duration = await getAudioFileDuration(file);
			const formattedDuration = new Date(duration * 1000).toISOString().substring(14, 19);

			if (duration > maximumAcceptedFileDuration) {
				toast.error(
					`File duration is too larger (${file.name} - ${formattedDuration}). Maximum accepted file duration is 10 minutes.`
				);
				return;
			}

			const controller = new AbortController();
			setFile(file);
			// NOTE: An AbortController or its signal can not be reused nor reset.
			// If you need to "reset" it, you have to create a new AbortController instance and use that instead for each new request.
			setController(controller);

			const uploadedFileToken = await fetchFileUpload(file, setProgress, controller);

			setFile(null);

			if (uploadedFileToken) {
				setUploadedFileToken(uploadedFileToken);
				setProgress(0);
				setController(null);
				await wait(500);
				setIsModalFormOpen(true);
			}
		},
		[setController, setFile, setIsModalFormOpen, setProgress, setUploadedFileToken]
	);

	const handleError = useCallback(error => {
		console.error(error);
		toast.error(error.message);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: { 'audio/*': acceptedFileTypes },
		maxSize: maximumAcceptedFileSize,
		multiple: false,
		onDropAccepted: handleDropAccepted,
		onDropRejected: handleDropRejected,
		onError: handleError,
		useFsAccessApi: false,
	});

	return (
		<div className="file-import-wrapper" {...getRootProps()}>
			<input {...getInputProps()} />
			<Image src={fileImport} alt="Drag and drop file" />
			<h2>{isDragActive ? 'Drop the file here...' : 'Drag and drop file here, or click to select file.'}</h2>
			<Button
				className="action-button"
				icon={
					<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
						<path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z" />
					</svg>
				}
			>
				Choose file
			</Button>
		</div>
	);
};
