import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';

import styles from '@styles/components/VoiceButton.module.css';

export const VoiceButton = ({ style, text, audio: audioProp }) => {
	const [audio, setAudio] = useState(null);
	const [isAudioPlaying, setIsAudioPlaying] = useState(false);

	useEffect(() => {
		setAudio(new Audio(audioProp));
		// Only run once on the first render on the client.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (audio) {
			audio.onended = function () {
				audio.currentTime = 0;
				setIsAudioPlaying(false);
			};
		}
	}, [audio]);

	const handleOnPlayClick = useCallback(() => {
		if (!isAudioPlaying) {
			audio.play();
			setIsAudioPlaying(true);
		}
		//  else {
		// audio.pause();
		// audio.currentTime = 0;
		// }
	}, [audio, isAudioPlaying]);

	return (
		<button className={styles.voice} onClick={handleOnPlayClick}>
			<div style={style}>
				<svg className={styles.soundButton} width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
					<path d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z" />
					<path d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z" />
				</svg>
				<span className={styles.text}>{text}</span>
				<span
					className={classNames(styles.progress, { active: isAudioPlaying })}
					style={
						isAudioPlaying
							? {
									animationDuration: `${audio?.duration}s`,
									backgroundColor: style.progressColor,
									animationName: 'progress',
									animationFillMode: 'forwards',
									animationTimingFunction: 'linear',
							  }
							: undefined
					}
				/>
			</div>
			<svg className={styles.triangle} width={24} height={18} viewBox="0 0 24 18">
				<path
					d="M.845.265h22.403l-2.425 1.043A45.894 45.894 0 0 0 .845 17.901V.265z"
					fill={isAudioPlaying ? style.progressColor : style.backgroundColor}
				/>
			</svg>
		</button>
	);
};
