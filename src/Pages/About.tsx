import Pics from '../assets/mypics.png';
import PicsSmall from '../assets/picsl.png';
import '../styles/Pages/About.css';

function About() {
	return (
		<div className='about '>
			<div className='row'>
				<div className='about__details col-lg-8 col-md-7 col-xs-12'>
					<div className='about__title'>
						<h3>About me</h3>
						<div className='about__staight'></div>
					</div>
					<p className='about__p'>
						I’m James Oluwasegun OKUNOLA. My passion for web development started
						far back in 2017 when I just finished my secondary school. I was
						eager to learn anything that will make me unique. This lead me to
						start HTML & CSS course on W3schools.
						<br />
					</p>
					<p className='about__p'>
						Today, I’ve been able to work with a startup, individuals and
						companies. My passion today is to work for a company and promote
						their products and I am willing to learn from other developers.
						<br />
					</p>
					<p className='about__p'>
						I belive that, “Code will save me, and design will make my life
						neat”.
						<br />
					</p>
					<h1 className='about__motto'>I Code, I design</h1>
				</div>
				<div className='about_image col-lg-4 col-md-5 col-xs-12'>
					<img src={Pics} alt='Me' className='image__large' />
					<img src={PicsSmall} alt='Me' className='image__small' />
				</div>
			</div>
		</div>
	);
}

export default About;
