import React from "react";
import ProjectsDetails from "../../components/ProjectsDetails";
import ProjectsDetailsEven from "../../components/ProjectsDetailsEven";
import "../../styles/Pages/Projects.css";
import SteerImage from "../../assets/steereducation.png";
import AltdeckImage from "../../assets/altdeck.png";

function YouTubeProjects() {
	return (
		<div className="project">
			<div className="project__section">
				<div className="project__title">
					<h3>01. Steer Education</h3>
					<div className="about__staight"></div>
				</div>
				<ProjectsDetails
					category="Software Developer"
					desc="Developed an interactive dashboard using React and TypeScript.  Developed multi-form system using React and TypeScript. Utilized modular design to allow for customization by educators. "
					tech1="TypeScript"
					tech2="Chatjs"
					tech3="Tailwind CSS"
					tech4="React"
					image={SteerImage}
					liveLink="https://steer.global/platform/edu/new-check-step1"
				/>
			</div>

			<div className="project__section">
				<div className="project__titleEven">
					<h3>02. Altdeck</h3>
					<div className="about__staight"></div>
				</div>
				<ProjectsDetailsEven
					category="Software Engineer"
					desc="Altdeck required an NFT minting application that was user-friendly and optimized for search engines."
					tech1="Rust"
					tech2="Nextjs"
					tech3="Tailwind CSS"
					tech4="TypeScript"
					image={AltdeckImage}
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

export default YouTubeProjects;
