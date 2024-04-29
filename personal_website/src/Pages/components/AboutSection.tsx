import coverImg from "../../assets/cover-img.jpg"; // Add this line

const AboutSection = () => {
	const handleContactClick = () => {
		const footer = document.getElementById("footer");
		if (footer) {
			footer.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section id="about" className="py-16">
			<div className="container mx-auto flex flex-col md:flex-row items-center">
				<div className="md:w-1/2 mb-8 md:mb-0">
					{/* Placeholder for your picture */}
					<img
						src={coverImg}
						alt="Jonathan Christyadi"
						className="mx-auto md:mx-0"
						style={{ width: "100%", maxWidth: "500px", height: "auto" }} // Modified this line
					/>
				</div>
				<div className="md:w-1/2 md:ml-8">
					<h2 className="text-3xl font-bold mb-4">About Me</h2>
					<p className="text-lg mb-4">
						Hi, I'm Jonathan Christyadi, a passionate developer with a love for
						creating innovative web applications. I specialize in backend and
						some frontend development using modern technologies such as Spring
						Boot, React.js, TypeScript, and Tailwind CSS.
					</p>
					<p className="text-lg mb-4">
						My journey into the world of programming began several years ago
						when I discovered the power of code to automate repetitive tasks.
						Since then, I've honed my skills through various projects and
						collaborations, constantly striving to learn and improve.
					</p>
					<p className="text-lg mb-4">
						Here are some of my finest achievements to date:
					</p>
					<ul className="list-disc ml-6 mb-4">
						<li>
							Successfully fixed the wifi router by turning it off and on again.
						</li>
						<li>Can bench 225 lbs with a spotter of course. </li>
						<li>
							Made you read these bullet points (gotcha, they're pretty boring).
						</li>
						<li>Coded for 18 hours straight and only had 3 cups of coffee.</li>
						<li>Tried a different hobby each month.</li>
					</ul>
					<p className="text-lg mb-4">
						When I'm not coding, you can find me exploring the great outdoors,
						experimenting with new recipes in the kitchen, or indulging in a
						good sleep.
					</p>
					<button
						onClick={handleContactClick}
						className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full inline-block hover:shadow-lg transition duration-300 ease-in-out"
					>
						Contact Me
					</button>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
