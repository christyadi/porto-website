import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
const HomePage = () => {
	return (
		<>
			<Header />
			<AboutSection />
			{/* <ContactSection /> */}
			<PortfolioSection />
			<Footer />
		</>
	);
};

export default HomePage;
