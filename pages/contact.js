import { Layout } from '@components/Layout';

import styles from '@styles/pages/Contact.module.css';

const Contact = () => {
	return (
		<Layout className="contact" title="Contact">
			<section className={styles.intro}>
				<div className="container">
					<h1>Have a Question?</h1>
					<p>
						Whether you want to ask us about Voiceloft services or anything else, we will do our best to answer you. Feel free to contact us
						at any time. We will respond to you as soon as possible.
					</p>
				</div>
			</section>
		</Layout>
	);
};

export default Contact;
