import { Button } from '@components/Button';

const handleClick = () => window.open('https://calendly.com/voiceloft/', '_blank');

export const Motto = () => (
	<section className="motto">
		<div className="container">
			<h2>
				Want to try our cutting
				<br />
				edge voice technologies?
			</h2>
			<Button content="Talk to sales" onClick={handleClick} />
		</div>
	</section>
);
