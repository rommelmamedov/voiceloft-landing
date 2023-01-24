import Image from 'next/image';
import { CircularProgressbar } from 'react-circular-progressbar';

import fileImport from '@icons/file-import.svg';

export const FileUploadProgress = ({
	controller,
	file,
	setController,
	setFile,
	setUploadedFileToken,
	progress,
	setProgress,
}) => {
	if (!file && !controller) {
		return null;
	}

	const handleCancelUpload = () => {
		controller.abort();
		setFile(null);
		setProgress(0);
		setController(null);
		setUploadedFileToken(null);
	};

	return (
		<div className="file-upload-progress">
			<p>Uploading...</p>
			<CircularProgressbar value={progress} text={`${progress}%`} strokeWidth={2.5} />
			<strong>
				<Image src={fileImport} alt={file.name} />
				{file.name}
			</strong>
			<button onClick={handleCancelUpload}>Cancel</button>
		</div>
	);
};
