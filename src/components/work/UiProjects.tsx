import React from "react";
import ProjectsDetails from "../../components/ProjectsDetails";
import ProjectsDetailsEven from "../../components/ProjectsDetailsEven";
import "../../styles/Pages/Projects.css";
import SteerImage from "../../assets/steereducation.png";
import FashionImage from "../../assets/fashion.jpg";
import MotoImage from "../../assets/betmoto.jpg";

function UiProjects() {
	return (
		<div className="project">
			<div className="project__section">
				<div className="project__title">
					<h3>01. Fashion With Pride</h3>
					<div className="about__staight"></div>
				</div>
				<ProjectsDetails
					category="Figma - Mobile App  Design"
					desc='To design an online fashion store called "Fashion with Pride" that provides users with the ability to prepare for the changing seasons through a weather-based design.  '
					tech1="TypeScript"
					tech2="Chatjs"
					tech3="Tailwind CSS"
					tech4="React"
					image={FashionImage}
					liveLink="https://steer.global/platform/edu/new-check-step1"
				/>
			</div>

			<div className="project__section">
				<div className="project__titleEven">
					<h3>02. SuperCross Bet App</h3>
					<div className="about__staight"></div>
				</div>
				<ProjectsDetailsEven
					category="UI/UX with Figma"
					desc="To design a mobile app for betting that will be presented to the sponsoring company, Monster Energy. The app should include both the client's logo and the sponsoring company's logo."
					tech1="Figma"
					tech2="Behance"
					tech3="Photoshop"
					tech4="TypeScript"
					image={MotoImage}
					liveLink="https://www.figma.com/file/7ATYnOb2V7HtFySeIp3fqJ/Supercross-Motorbike?node-id=440%3A2"
				/>
			</div>

			<div className="project__section">
				<div className="project__title">
					<h3>03. Hathora</h3>
					<div className="about__staight"></div>
				</div>
				<ProjectsDetails
					category="Software Developer"
					desc="Hathora helps developers that use frameworks to build multiplayer games.

                    I helped to build the interface for the Chess demo multiplayer game."
					tech1="TypeScript"
					tech2="Chatjs"
					tech3="Tailwind CSS"
					tech4="React"
					image={SteerImage}
					liveLink="https://steer.global/platform/edu/new-check-step1"
				/>
			</div>
		</div>
	);
}

export default UiProjects;
