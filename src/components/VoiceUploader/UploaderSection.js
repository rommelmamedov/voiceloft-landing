import classNames from 'classnames';
import { useCallback, useState } from 'react';

import { FileImportTab } from '@components/VoiceUploader/FileImportTab';
import { SpeechRecordTab } from '@components/VoiceUploader/SpeechRecordTab';
import { YouTubeTab } from '@components/VoiceUploader/YouTubeTab';

const tabs = [
	{
		tab: 'Speech record',
		className: 'speech-record',
		content: <SpeechRecordTab />,
	},
	{
		tab: 'Import audio file',
		className: 'file-import',
		content: <FileImportTab />,
	},
	{
		tab: 'YouTube link',
		className: 'you-tube',
		content: <YouTubeTab />,
	},
];

export const UploaderSection = () => {
	const [activeTab, setActiveTab] = useState('file-import');

	const handleClick = useCallback(event => {
		// NOTE: Order of the class names matters.
		// event.target.previousElementSibling?.classList.add('previous-sibling');
		setActiveTab(event.target.classList[0]);
	}, []);

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
		</section>
	);
};
