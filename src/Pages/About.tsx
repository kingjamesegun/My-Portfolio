import Pics from "../assets/mypics.png";
import PicsSmall from "../assets/picsl.png";
import "../styles/Pages/About.css";

function About() {
	return (
		<div className="about ">
			<div className="row">
				<div className="about__details col-lg-8 col-md-7 col-xs-12">
					<div className="about__title">
						<h3>About me</h3>
						<div className="about__staight"></div>
					</div>
					<p className="about__p">
						I’m James Oluwasegun OKUNOLA. I am a highly skilled React developer
						and UI/UX designer with a strong background in developing React
						applications (web and mobile) and creating elegant Figma designs. I
						am a fast learner who is always up-to-date on the latest
						technologies, and I have a passion for building strong communication
						with my clients.
						<br />
					</p>
					<p className="about__p">
						As a team player, I work well with others and am always open to
						collaborating to achieve outstanding results in web app development
						and user interface design. With my skills and experience, I am
						confident in my ability to deliver high-quality projects that meet
						my client's needs and exceed their expectations.
						<br />
					</p>
					<p className="about__p">
						" I'm not a great programmer, I'm just a good programmer with each
						great habits."
						<br />
					</p>
					<h1 className="about__motto">I Code, I design</h1>
				</div>
				<div className="about_image col-lg-4 col-md-5 col-xs-12">
					<img src={Pics} alt="Me" className="image__large" />
					<img src={PicsSmall} alt="Me" className="image__small" />
				</div>
			</div>
		</div>
	);
}

export default About;
