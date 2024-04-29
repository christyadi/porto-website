import React from "react";

const ContactSection: React.FC = () => {
	return (
		<section id="contact" className="bg-blue-900 text-white py-16">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-bold mb-8">Contact Me</h2>
				<p className="text-lg mb-8">
					Ready to start your project? Let's get in touch.
				</p>
				<a
					href="mailto:your.email@example.com"
					className="text-blue-200 font-semibold hover:underline"
				>
					your.email@example.com
				</a>
			</div>
		</section>
	);
};

export default ContactSection;
