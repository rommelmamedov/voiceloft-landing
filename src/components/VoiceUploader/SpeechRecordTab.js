import { useAudioRecorder } from '@sarafhbk/react-audio-recorder';
import Image from 'next/image';

import { Button } from '@components/Button';

import speechRecord from '@icons/speech-record.svg';

export const SpeechRecordTab = () => {
	const {
		// Format
		audioResult,
		errorMessage,
		pauseRecording,
		resumeRecording,
		startRecording,
		status,
		stopRecording,
		timer,
	} = useAudioRecorder();

	console.log('🚀 ~ file: SpeechRecordTab.js:20 ~ SpeechRecordTab ~ timer', timer);
	console.log('🚀 ~ file: SpeechRecordTab.js:20 ~ SpeechRecordTab ~ audioResult', audioResult);

	return (
		<div className="speech-record-wrapper">
			<Image src={speechRecord} alt="Start recording" />
			<h2>Click on microphone and start recording</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
			<button className="record-button">
				{/* <svg width={206} height={207} fill="none">
					<g filter="url(#a)">
						<rect x={34} width={137.25} height={137.25} rx={68.625} fill="#272FFB" />
					</g>
					<path
						d="M118.391 66.78c0-1.014-.754-1.788-1.739-1.788-.985 0-1.739.774-1.739 1.787 0 6.971-5.506 12.631-12.287 12.631-6.782 0-12.288-5.66-12.288-12.63 0-1.014-.753-1.788-1.739-1.788-.985 0-1.739.774-1.739 1.787 0 8.282 6.028 15.253 14.027 16.147v4.766h-6.318c-.985 0-1.739.775-1.739 1.788s.754 1.787 1.74 1.787h16.112c.985 0 1.739-.774 1.739-1.787s-.754-1.788-1.739-1.788h-6.318v-4.766c7.999-.894 14.027-7.865 14.027-16.147Z"
						fill="#fff"
					/>
					<path
						d="M102.625 41.658c-5.066 0-9.196 4.228-9.196 9.413v15.276c0 5.242 4.13 9.413 9.196 9.47 5.066 0 9.196-4.228 9.196-9.414V51.071c0-5.185-4.13-9.413-9.196-9.413Z"
						fill="#fff"
					/>
					<defs>
						<filter
							id="a"
							x={0}
							y={0}
							width={205.25}
							height={206.25}
							viewBox="0 0 206 207"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity={0} result="BackgroundImageFix" />
							<feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
							<feOffset dy={35} />
							<feGaussianBlur stdDeviation={17} />
							<feColorMatrix values="0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 0.5 0" />
							<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4540_950" />
							<feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
							<feOffset dy={2} />
							<feGaussianBlur stdDeviation={1} />
							<feColorMatrix values="0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 1 0" />
							<feBlend in2="effect1_dropShadow_4540_950" result="effect2_dropShadow_4540_950" />
							<feBlend in="SourceGraphic" in2="effect2_dropShadow_4540_950" result="shape" />
						</filter>
					</defs>
				</svg> */}
				{/* TODO: */}
				{/* <svg width="206" height="207" viewBox="0 0 206 207" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#a)">
						<rect x="34" width="137.25" height="137.25" rx="68.625" fill="#272FFB" />
					</g>
					<path
						d="M118.391 66.78c0-1.014-.754-1.788-1.739-1.788-.985 0-1.739.774-1.739 1.787 0 6.971-5.506 12.631-12.287 12.631-6.782 0-12.288-5.66-12.288-12.63 0-1.014-.753-1.788-1.739-1.788-.985 0-1.739.774-1.739 1.787 0 8.282 6.028 15.253 14.027 16.147v4.766h-6.318c-.985 0-1.739.775-1.739 1.788s.754 1.787 1.74 1.787h16.112c.985 0 1.739-.774 1.739-1.787s-.754-1.788-1.739-1.788h-6.318v-4.766c7.999-.894 14.027-7.865 14.027-16.147Z"
						fill="#fff"
					/>
					<path
						d="M102.625 41.658c-5.066 0-9.196 4.228-9.196 9.413v15.276c0 5.242 4.13 9.413 9.196 9.47 5.066 0 9.196-4.228 9.196-9.414V51.071c0-5.185-4.13-9.413-9.196-9.413Z"
						fill="#fff"
					/>
					<defs>
						<filter
							id="a"
							x="0"
							y="0"
							width="205.25"
							height="206.25"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
							<feOffset dy="35" />
							<feGaussianBlur stdDeviation="17" />
							<feColorMatrix values="0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 0.5 0" />
							<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4540_0" />
							<feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
							<feOffset dy="2" />
							<feGaussianBlur stdDeviation="1" />
							<feColorMatrix values="0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 1 0" />
							<feBlend in2="effect1_dropShadow_4540_0" result="effect2_dropShadow_4540_0" />
							<feBlend in="SourceGraphic" in2="effect2_dropShadow_4540_0" result="shape" />
						</filter>
					</defs>
				</svg> */}
				{/* TODO: */}
			</button>

			<div>
				{audioResult && <audio controls src={audioResult} />}
				<p>
					Status : <b>{status}</b>
				</p>
				<p>
					Error Message : <b>{errorMessage}</b>
				</p>
				<div>
					<p>{new Date(timer * 1000).toISOString().substr(11, 8)}</p>
					<div>
						<button onClick={startRecording}>Start</button>
						<button onClick={stopRecording}>Stop</button>
						<button onClick={pauseRecording}>Pause</button>
						<button onClick={resumeRecording}>Resume</button>
					</div>
				</div>
			</div>
			<Button
				className="action-button"
				onClick={status === 'recording' ? stopRecording : startRecording}
				//   <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
				//   <path d="M6 12H4c0 4.072 3.061 7.436 7 7.931V22h2v-2.069c3.939-.495 7-3.858 7-7.931h-2c0 3.309-2.691 6-6 6s-6-2.691-6-6z" />
				//   <path d="M8 12c0 2.206 1.794 4 4 4s4-1.794 4-4h-2v-2h2V8h-2V6h2c0-2.217-1.785-4.021-3.979-4.021a.933.933 0 0 0-.209.025A4.006 4.006 0 0 0 8 6h4v2H8v2h4v2H8z" />
				// </svg>

				icon={
					status === 'recording' ? (
						<svg
							width="28"
							height="28"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<circle cx="12" cy="12" r="10"></circle>
							<rect x="9" y="9" width="6" height="6"></rect>
						</svg>
					) : (
						<svg
							width="28"
							height="28"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M12 2c-1.7 0-3 1.2-3 2.6v6.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V4.6C15 3.2 13.7 2 12 2z" />
							<path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18.4v3.3M8 22h8" />
						</svg>
					)
				}
			>
				{status === 'recording' ? 'Stop' : 'Record'}
			</Button>
			{status !== 'idle' && (
				<Button
					className="action-button"
					onClick={status === 'paused' ? resumeRecording : pauseRecording}
					icon={
						status === 'paused' ? (
							<svg
								width="28"
								height="28"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<polygon points="5 3 19 12 5 21 5 3"></polygon>
							</svg>
						) : (
							<svg
								width="28"
								height="28"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<rect x="6" y="4" width="4" height="16"></rect>
								<rect x="14" y="4" width="4" height="16"></rect>
							</svg>
						)
					}
				>
					{status === 'paused' ? 'Resume' : 'Pause'}
				</Button>
			)}
		</div>
	);
};

const Start = props => (
	<svg width={206} height={207} viewBox="0 0 206 207" fill="none">
		<g filter="url(#a)">
			<rect x={34} width={137.25} height={137.25} rx={68.625} fill="#272FFB" />
		</g>
		<path
			d="M118.391 66.78c0-1.014-.754-1.788-1.739-1.788-.985 0-1.739.774-1.739 1.787 0 6.971-5.506 12.631-12.287 12.631-6.782 0-12.288-5.66-12.288-12.63 0-1.014-.753-1.788-1.739-1.788-.985 0-1.739.774-1.739 1.787 0 8.282 6.028 15.253 14.027 16.147v4.766h-6.318c-.985 0-1.739.775-1.739 1.788s.754 1.787 1.74 1.787h16.112c.985 0 1.739-.774 1.739-1.787s-.754-1.788-1.739-1.788h-6.318v-4.766c7.999-.894 14.027-7.865 14.027-16.147Z"
			fill="#fff"
		/>
		<path
			d="M102.625 41.658c-5.066 0-9.196 4.228-9.196 9.413v15.276c0 5.242 4.13 9.413 9.196 9.47 5.066 0 9.196-4.228 9.196-9.414V51.071c0-5.185-4.13-9.413-9.196-9.413Z"
			fill="#fff"
		/>
		<defs>
			<filter
				id="a"
				x={0}
				y={0}
				width={205.25}
				height={206.25}
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
				<feOffset dy={35} />
				<feGaussianBlur stdDeviation={17} />
				<feColorMatrix values="0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 0.5 0" />
				<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4540_950" />
				<feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
				<feOffset dy={2} />
				<feGaussianBlur stdDeviation={1} />
				<feColorMatrix values="0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 1 0" />
				<feBlend in2="effect1_dropShadow_4540_950" result="effect2_dropShadow_4540_950" />
				<feBlend in="SourceGraphic" in2="effect2_dropShadow_4540_950" result="shape" />
			</filter>
		</defs>
	</svg>
);

const Stop = props => (
	<svg width={219} height={220} viewBox="0 0 219 220" fill="none">
		<g filter="url(#a)">
			<rect x={34} width={151} height={151} rx={75.5} fill="#D17272" />
		</g>
		<rect x={90} y={55} width={40} height={40} rx={6} fill="#fff" />
		<defs>
			<filter id="a" x={0} y={0} width={219} height={220} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
				<feOffset dy={35} />
				<feGaussianBlur stdDeviation={17} />
				<feColorMatrix values="0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 0.5 0" />
				<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4583_60" />
				<feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
				<feOffset dy={2} />
				<feGaussianBlur stdDeviation={1} />
				<feColorMatrix values="0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 1 0" />
				<feBlend in2="effect1_dropShadow_4583_60" result="effect2_dropShadow_4583_60" />
				<feBlend in="SourceGraphic" in2="effect2_dropShadow_4583_60" result="shape" />
			</filter>
		</defs>
	</svg>
);
