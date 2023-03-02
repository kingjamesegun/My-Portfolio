import React from "react";
import ProjectsDetails from "../../components/ProjectsDetails";
import ProjectsDetailsEven from "../../components/ProjectsDetailsEven";
import "../../styles/Pages/Projects.css";
import Portfolio from "../../assets/portfolio.jpg";
import Orit from "../../assets/orit.png";
import Trakkker from "../../assets/trakkker.png";
import RcPrintsImage from "../../assets/rcprint.png";

function FrontendProjects() {
	return (
		<div className="project">
			<div className="project__section">
				<div className="project__title">
					<h3>01. RC Prints</h3>
					<div className="about__staight"></div>
				</div>
				<ProjectsDetails
					category="Nextjs - Web development  "
					desc="RC Prints required a website where users could print digital art on a variety of surfaces, as well as order custom designs if needed."
					tech1="Next Js"
					tech2="Netify"
					tech3="Tailwind CSS"
					tech4="React"
					image={RcPrintsImage}
					liveLink="https://kingjamesegun.netlify.app/"
					githubLink="https://github.com/kingjamesegun/My-Portfolio		"
				/>
			</div>

			<div className="project__section">
				<div className="project__titleEven">
					<h3>02. Orit Quiz App</h3>
					<div className="about__staight"></div>
				</div>
				<ProjectsDetailsEven
					category="Web Development"
					desc="The client required a demo quiz application that would demonstrate the use of a small functionality in a larger project."
					tech1="SASS"
					tech2="Netify"
					tech3="TypeScript"
					tech4="React"
					image={Orit}
					liveLink="https://oritiq.netlify.app/"
				/>
			</div>

			<div className="project__section">
				<div className="project__title">
					<h3>03. Trakkker</h3>
					<div className="about__staight"></div>
				</div>
				<ProjectsDetails
					category="Web Development"
					desc="Best place to track the price of Jumia prices.Inspiration came from a friend😉(Olamidun) that built the backend using Python."
					tech1="SASS"
					tech2="Netify"
					tech3="Tailwind CSS"
					tech4="React"
					image={Trakkker}
					liveLink="https://trakkker.netlify.app/"
					githubLink="https://github.com/kingjamesegun/Trakkkr.git"
				/>
			</div>
		</div>
	);
}

export default FrontendProjects;
