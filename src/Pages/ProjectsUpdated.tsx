import { useState } from "react";
import FrontendProjects from "../components/work/FrontendProjects";
import UiProjects from "../components/work/UiProjects";
import WorkExperience from "../components/work/WorkExperience";
import YouTubeProjects from "../components/work/YouTubeProjects";
import "../styles/Pages/Projects.css";

const ProjectsUpdated = () => {
	const [toggleTab, setToggleTab] = useState(1);

	const togglehandleTab = (index: number) => {
		return setToggleTab(index);
	};

	return (
		<div className="text-white project" style={{ color: "#fff" }}>
			<div className="tabs__label">
				<div
					className={toggleTab === 1 ? "label__active" : "label__inactive"}
					onClick={() => togglehandleTab(1)}
				>
					Work Experience
				</div>
				<div
					className={toggleTab === 2 ? "label__active" : "label__inactive"}
					onClick={() => togglehandleTab(2)}
				>
					Frontend Development
				</div>
				<div
					className={toggleTab === 3 ? "label__active" : "label__inactive"}
					onClick={() => togglehandleTab(3)}
				>
					UI/UX designs
				</div>

				<div
					className={toggleTab === 4 ? "label__active" : "label__inactive"}
					onClick={() => togglehandleTab(4)}
				>
					Youtube Contents
				</div>
			</div>
			<div>
				<div className={toggleTab === 1 ? "content__show" : "content__hide"}>
					<WorkExperience />
				</div>
				<div className={toggleTab === 2 ? "content__show" : "content__hide"}>
					<FrontendProjects />
				</div>
				<div className={toggleTab === 3 ? "content__show" : "content__hide"}>
					<UiProjects />
				</div>
				<div className={toggleTab === 4 ? "content__show" : "content__hide"}>
					<YouTubeProjects />
				</div>
			</div>
		</div>
	);
};

export default ProjectsUpdated;
