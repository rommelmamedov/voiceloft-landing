import classNames from 'classnames';
import Image from 'next/image';
import { useCallback, useState } from 'react';

import { Button } from '@components/Button';

import fileImport from '@icons/file-import.svg';
import speechRecord from '@icons/speech-record.svg';
import youTube from '@icons/you-tube.svg';

const tabs = [
	{
		tab: 'Speech record',
		className: 'speech-record',
		icon: speechRecord,
		title: 'Start recording',
		description: 'Click on the following link to convert our demo file from WAV to MP3',
		content: <></>,
		button: (
			<Button
				icon={
					<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
						<path d="M6 12H4c0 4.072 3.061 7.436 7 7.931V22h2v-2.069c3.939-.495 7-3.858 7-7.931h-2c0 3.309-2.691 6-6 6s-6-2.691-6-6z" />
						<path d="M8 12c0 2.206 1.794 4 4 4s4-1.794 4-4h-2v-2h2V8h-2V6h2c0-2.217-1.785-4.021-3.979-4.021a.933.933 0 0 0-.209.025A4.006 4.006 0 0 0 8 6h4v2H8v2h4v2H8z" />
					</svg>
				}
			>
				Record
			</Button>
		),
	},
	{
		tab: 'Import audio file',
		className: 'file-import',
		icon: fileImport,
		title: 'Drag and drop file',
		description: 'Click on the following link to convert our demo file from WAV to MP3',
		content: <></>,
		button: (
			<Button
				icon={
					<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
						<path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z" />
					</svg>
				}
			>
				Choose file
			</Button>
		),
	},
	{
		tab: 'YouTube link',
		className: 'you-tube',
		icon: youTube,
		title: 'Paste YouTube link',
		description: 'Click on the following link to convert our demo file from WAV to MP3',
		content: <></>,
		button: (
			<Button
				icon={
					<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
						<path d="M11 15h2V9h3l-4-5-4 5h3z" />
						<path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z" />
					</svg>
				}
			>
				Upload
			</Button>
		),
	},
];

export const VoiceUploader = () => {
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
							<button key={index} onClick={handleClick} className={classNames(className, { active: activeTab === className })}>
								{tab}
							</button>
						))}
					</div>
					<div className="tab-list">
						{tabs.map(({ icon, title, description, content, className, button }, index) => (
							<div key={index} className={classNames('tab-content', { active: activeTab === className })}>
								<Image src={icon} alt={title} />
								<h2>{title}</h2>
								<p>{description}</p>
								{button}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
