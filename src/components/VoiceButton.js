import classNames from 'classnames';
import { useCallback, useState } from 'react';

import styles from '@styles/components/VoiceButton.module.css';

export const VoiceButton = ({ id, style, text, audio }) => {
	const [isAudioPlaying, setIsAudioPlaying] = useState(false);

	const handleVoiceButtonClick = useCallback(id => {
		console.log({ id });
		setIsAudioPlaying({ [id]: true });
		const audio = document.getElementById(id);
		audio.play();
	}, []);

	const handleAudioEnded = useCallback(id => {
		console.log({ id }, 'ended');
		setIsAudioPlaying({ [id]: false });
	}, []);

	return (
		<button key={id} className={styles.voice} style={style} onClick={() => handleVoiceButtonClick(id)}>
			<svg className={styles.soundButton} width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
				<path d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z" />
				<path d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z" />
			</svg>
			{text}
			<audio id={id} onEnded={() => handleAudioEnded(id)}>
				<source src={audio} type="audio/mpeg" />
				Your browser does not support the audio element.
			</audio>
			<svg className={styles.triangle} width={24} height={18} viewBox="0 0 24 18">
				<path d="M.845.265h22.403l-2.425 1.043A45.894 45.894 0 0 0 .845 17.901V.265z" fill={style.backgroundColor} />
			</svg>
			<span className={classNames('progress', { active: isAudioPlaying.id })} style={{ animationDuration: '1.4s' }} />
		</button>
	);
};
