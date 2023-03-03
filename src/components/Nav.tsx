import MenuIcon from "../assets/menu.svg";
import "../styles/components/nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import GitHubIcon from "../assets/git.svg";
import LinkIcon from "../assets/link.svg";
import TwitterIcon from "../assets/twi.svg";
import WhatsappIcon from "../assets/whatsapp.svg";
import InstagrmIcon from "../assets/i.svg";

function Nav() {
	const [menu, setMenu] = useState(false);

	const handleMenuClick = () => {
		setMenu((prevState) => !prevState);
	};
	const handleLinkClick = () => {
		setMenu(true);
	};
	return (
		<div className="nav">
			<div className="nav_main">
				<div className="logo">Xplore</div>
				<div className="nav__menu">
					<img src={MenuIcon} alt="Menu" onClick={handleMenuClick} />
				</div>
			</div>

			{!menu ? (
				<div style={{ height: "100vh", position: "relative" }}>
					<ul className="nav_ul">
						<li className="nav_links">
							<Link to="/" onClick={handleLinkClick}>
								<span className="links__num">01</span>
								<span>Home</span>
							</Link>
						</li>
						<li className="nav_links">
							<Link to="/about" onClick={handleLinkClick}>
								<span className="links__num">02</span>
								About
							</Link>
						</li>
						<li className="nav_links">
							<Link to="/projects" onClick={handleLinkClick}>
								<span className="links__num">03</span>
								Projects
							</Link>
						</li>
						<li className="nav_links">
							<Link to="/contact" onClick={handleLinkClick}>
								<span className="links__num">04</span>
								Message me
							</Link>
						</li>
					</ul>

					<div className="nav__btm">
						<div className="btm__copyright">
							COPYRIGHT 2023 - <span className="yellow">247SPACE</span> NIGERIA
						</div>
						<div className="nav__socials">
							<ul className="socials">
								<li className="socials__link">
									<a
										href="https://github.com/kingjamesegun"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src={GitHubIcon} alt="Github Link" />
									</a>
								</li>
								<li className="socials__link">
									<a
										href="https://wa.me/message/ICR3VWZS7ACVM1"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src={WhatsappIcon} alt="Whatsapp Link" />
									</a>
								</li>
								<li className="socials__link">
									<a
										href="https://twitter.com/kingjamesegun"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src={TwitterIcon} alt="Twitter Link" />
									</a>
								</li>
								<li className="socials__link">
									<a
										href="https://www.instagram.com/kingjamesegun/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src={InstagrmIcon} alt="IG ink" />
									</a>
								</li>
								<li className="socials__link">
									<a
										href="https://www.linkedin.com/in/james-okunola-65959519a/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src={LinkIcon} alt="Linkdin Link" />
									</a>
								</li>
							</ul>
						</div>
						<div className="btm__brand">
							Website made is made by{" "}
							<span className="yellow">247space Agency</span>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}

export default Nav;
