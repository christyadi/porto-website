import PortfolioCard from "./PortfolioCard";

interface Project {
	id: number;
	title: string;
	description: string;
	link: string;
	image: string;
}

const projects: Project[] = [
	{
		id: 1,
		title: "Dine Sync",
		description:
			"DineSync is a comprehensive web application designed to streamline the process of table and menu reservations for restaurants. Built using Java Spring Boot for the backend and React.js for the frontend, DineSync offers a seamless user experience coupled with robust functionality.",
		link: "https://git.fhict.nl/I502705/b.e-individual-project-s3-fontys",
		image: "https://via.placeholder.com/300x150",
	},
	{
		id: 2,
		title: "AI Phishing Link Detector",
		description:
			"Phishing Link Detector is a cutting-edge project that leverages the power of Artificial Intelligence to identify and flag potential phishing links. It uses machine learning algorithms to analyze the structure, content, and metadata of a link to determine its legitimacy. This project aims to enhance online security by providing users with a reliable tool to avoid falling victim to phishing scams.",
		link: "https://github.com/christyadi/PhishingLinkDetection-ML",
		image: "https://via.placeholder.com/300x150",
	},
	{
		id: 3,
		title: "PDF to HTML Converter Partnering with IQADOT Company",
		description:
			"Working with IQADOT Company to convert PDF files, JSON, CSV to HTML files or QnA format. The project is built using React and Spring Boot. The project aims to provide a seamless experience for users to convert PDF files to HTML files and send it to IQADOT Server.",
		link: "https://git.fhict.nl/I528940/group-project",
		image: "https://via.placeholder.com/300x150",
	},
];

const PortfolioSection = () => {
	return (
		<section id="portfolio" className="bg-gray-100 py-16">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-bold mb-8">My Portfolio</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{projects.map((project) => (
						<PortfolioCard
							key={project.id}
							title={project.title}
							description={project.description}
							link={project.link}
							image={project.image}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default PortfolioSection;
