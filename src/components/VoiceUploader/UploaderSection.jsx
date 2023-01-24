import classNames from 'classnames';
import { useCallback, useMemo, useState } from 'react';

import { FileImportTab } from '@components/VoiceUploader/FileImportTab';
import { ModalForm } from '@components/VoiceUploader/ModalForm';
import { SpeechRecordTab } from '@components/VoiceUploader/SpeechRecordTab';
import { YouTubeTab } from '@components/VoiceUploader/YouTubeTab';

export const UploaderSection = () => {
	const [activeTab, setActiveTab] = useState('file-import');
	const [isModalFormOpen, setIsModalFormOpen] = useState(false);
	const [uploadedFileToken, setUploadedFileToken] = useState(null);

	const handleClick = useCallback(event => {
		setActiveTab(event.target.classList[0]);
	}, []);

	const tabs = useMemo(
		() => [
			{
				tab: 'Speech record',
				className: 'speech-record',
				content: <SpeechRecordTab />,
			},
			{
				tab: 'Import audio file',
				className: 'file-import',
				content: (
					<FileImportTab
						setIsModalFormOpen={setIsModalFormOpen}
						setUploadedFileToken={setUploadedFileToken}
					/>
				),
			},
			{
				tab: 'YouTube link',
				className: 'you-tube',
				content: <YouTubeTab />,
			},
		],
		[]
	);

	return (
		<section className="upload">
			<div className="container">
				<div className="upload-container">
					<div className="tab-buttons">
						{tabs.map(({ tab, className }, index) => (
							<button
								key={index}
								onClick={handleClick}
								className={classNames(className, { active: activeTab === className })}
								// TODO: YouTube on phase 2.
								disabled={className === 'you-tube'}
								title={className === 'you-tube' ? 'Adding YouTube link will be added on next phase. 🚧' : tab}
							>
								{tab}
							</button>
						))}
					</div>
					<div className="tab-list">
						{tabs.map(({ content, className }, index) => (
							<div key={index} className={classNames('tab-content', { active: activeTab === className })}>
								{content}
							</div>
						))}
					</div>
				</div>
			</div>
			<ModalForm
				isModalFormOpen={isModalFormOpen}
				setIsModalFormOpen={setIsModalFormOpen}
				token={uploadedFileToken}
			/>
		</section>
	);
};
