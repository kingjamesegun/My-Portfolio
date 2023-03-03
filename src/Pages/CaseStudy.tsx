import "../styles/Pages/CaseStudy.css";
import ImageCase from "../assets/imagecase.jpg";
import CaseStudyHeader from "../components/header/CaseStudyHeader";
import ProjectTags from "../components/tags/ProjectTags";
import MiddlePics from "../assets/middle-pics.jpg";
import Quote from "../components/quote/Quote";
import LastPics from "../assets/last.jpg";
import ArrowIcon from "../assets/up-arrow.svg";

const CaseStudy = () => {
	return (
		<div className="  py-28 bg-black">
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
					<div className="mt-3 md:mt-5 flex justify-between item-center">
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
			<div className="my-10 md:my-20">
				<img src={ImageCase} alt="CaseStudy" />
			</div>
			<CaseStudyHeader
				section="CLIENT DETAILS"
				title="Understanding the project."
				sectionNo="01"
			/>
			<div className="px-3 lg:px-28 ">
				<div className="grid grid-cols-1 lg:grid-cols-3">
					<div className="grid col-span-1 md:col-span-2">
						<h3 className="text-white text-xl md:text-2xl font-bold">
							Challenge
						</h3>
						<p className="text-dullBlack  mt-2 md:mt-3">
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
					<h3 className="text-white text-xl md:text-2xl font-bold mb-2 md:mb-5">
						Project tags
					</h3>
					<div className="flex flex-col md:flex-row gap-3">
						<ProjectTags title="TypeScript" />
						<ProjectTags title="SASS" />
						<ProjectTags title="Node" />
						<ProjectTags title="Figma" />
					</div>
				</div>
				<div className=" py-5 md:py-20 ">
					<img
						src={MiddlePics}
						alt="Middle"
						className="w-full md:w-3/4 mx-auto"
					/>
				</div>
				<CaseStudyHeader
					section="PROBLEM SOLVING"
					title="Execution and solving the problem"
					sectionNo="02"
				/>
				<div className="px-3 md:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
					<h3 className="text-white font-bold mb-2">What I did well</h3>
					<p className="text-dullBlack col-span-1  lg:col-span-2">
						To address the challenge, we developed a website using a combination
						of React and TypeScript. We created a responsive design that
						incorporated weather-based design elements such as changing
						backgrounds and seasonal product suggestions to enable users to
						prepare for the changing seasons. Users were also able to view and
						interact with other users' fashion posts through a user-friendly
						interface that allowed liking and commenting on posts.
					</p>
				</div>

				<div className="my-10 md:my-20">
					<img src={ImageCase} alt="CaseStudy" />
				</div>
				<Quote text='"To be at the cutting edge of innovation meant for myself and the team to be relentless. Luckily the founders cultivated a culture that allowed everyone to try new ideas, even if it meant potential failure. As long as we learned, together".' />
				<CaseStudyHeader
					section="PROJECT SUMMARY"
					title="What I would do differently"
					sectionNo="03"
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<p className="text-dullBlack">
						The "Fashion with Pride" website was successfully developed and
						launched. The website's weather-based design elements have received
						positive feedback from users, as they appreciate being able to
						prepare for seasonal changes. The ability to view and interact with
						other users' fashion posts has increased user engagement and helped
						to build a community of like-minded individuals. The responsive
						design and easy-to-navigate interface have also led to increased
						conversion rates and customer satisfaction. Overall, the "Fashion
						with Pride" website has successfully addressed the challenge of
						developing an online fashion store with a weather-based design and a
						platform for user interaction.
					</p>
					<p className="text-dullBlack">
						The "Fashion with Pride" website was successfully developed and
						launched. The website's weather-based design elements have received
						positive feedback from users, as they appreciate being able to
						prepare for seasonal changes. The ability to view and interact with
						other users' fashion posts has increased user engagement and helped
						to build a community of like-minded individuals. The responsive
						design and easy-to-navigate interface have also led to increased
						conversion rates and customer satisfaction. Overall, the "Fashion
						with Pride" website has successfully addressed the challenge of
						developing an online fashion store with a weather-based design and a
						platform for user interaction.
					</p>
				</div>

				<div className="my-10 md:my-20">
					<img
						src={LastPics}
						alt="CaseStudy"
						className="w-full lg:w-2/4 mx-auto"
					/>
				</div>

				<div className="w-[150px] flex justify-center items-center py-3 mx-auto flex-col bg-[#1E1E1E] text-white">
					<img
						src={ArrowIcon}
						alt="arrow-up"
						className="bg-white w-10 h-10 p-2 rounded-full mb-2"
					/>
					<p className="text-white font-bold">SCROLL TO TOP</p>
				</div>
			</div>
		</div>
	);
};

export default CaseStudy;
