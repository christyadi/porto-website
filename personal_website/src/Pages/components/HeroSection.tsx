import React from "react";

const HeroSection: React.FC = () => {
	return (
		<section className="bg-blue-900 text-white py-16">
			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-bold mb-4">Hello, I'm Your Name</h2>
				<p className="text-lg mb-8">
					A passionate developer creating amazing apps with TypeScript and
					Tailwind CSS.
				</p>
				<a
					href="#contact"
					className="bg-white text-blue-900 py-2 px-6 rounded-full inline-block uppercase font-semibold tracking-wide hover:bg-gray-300"
				>
					Hire Me
				</a>
			</div>
		</section>
	);
};

export default HeroSection;
