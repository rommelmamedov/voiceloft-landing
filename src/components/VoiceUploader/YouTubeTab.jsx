import Image from 'next/image';

import { Button } from '@components/Button';

import youTube from '@icons/you-tube.svg';

export const YouTubeTab = () => {
	return (
		<>
			<Image src={youTube} alt="Paste YouTube link" />
			<h2>Paste YouTube link</h2>
			<Button
				icon={
					<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
						<path d="M11 15h2V9h3l-4-5-4 5h3z" />
						<path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z" />
					</svg>
				}
			>
				Upload
			</Button>
		</>
	);
};
