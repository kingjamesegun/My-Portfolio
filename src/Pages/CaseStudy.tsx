import "../styles/Pages/CaseStudy.css";
import ImageCase from "../assets/imagecase.jpg";
import CaseStudyHeader from "../components/header/CaseStudyHeader";
import ProjectTags from "../components/tags/ProjectTags";

const CaseStudy = () => {
	return (
		<div className="case__study  py-28 bg-black">
			<div className="grid  md:grid-cols-3 px-3  lg:px-28">
				<div className="grid grid-cols-1">
					<p className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
						Bet Moto
					</p>
				</div>
				<div className="grid md:col-span-2">
					<p className="text-dullBlack">
						"Fashion with Pride" is an online fashion store that aims to help
						users prepare for the changing seasons by offering a weather-based
						design. In addition, the website provides a platform for users to
						showcase their personal style, view other users' styles, and
						interact with each other through liking and commenting on posts.
					</p>
					<div className="mt-5 flex justify-between item-center">
						<p className="text-md text-dullBlack">
							<span className="text-white font-bold">Role: </span>
							UI Designer
						</p>
						<p className="text-md text-dullBlack">
							<span className="text-white font-bold">Duration: </span>
							July 2021- August 2023
						</p>
					</div>
				</div>
			</div>
			<div className="my-20">
				<img src={ImageCase} alt="CaseStudy" />
			</div>
			<CaseStudyHeader />
			<div className="px-5 lg:px-28 ">
				<div className="grid grid-cols-3">
					<div className="grid col-span-2">
						<h3 className="text-white text-2xl font-bold">Challenge</h3>
						<p className="text-dullBlack  mt-3">
							The challenge was to create an online fashion store with a
							visually appealing and responsive design that would incorporate
							weather-based design elements to help users prepare for seasonal
							changes. The website should also allow users to interact with each
							other by liking and commenting on posts while showcasing products
							effectively.
						</p>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white text-2xl font-bold mb-5">Project tags</h3>
					<div className="flex gap-3">
						<ProjectTags title="TypeScript" />
						<ProjectTags title="SASS" />
						<ProjectTags title="Node" />
						<ProjectTags title="Figma" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CaseStudy;
