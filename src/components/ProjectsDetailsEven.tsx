import React from 'react';
import '../styles/components/ProjectsDetailsEven.css';
import LiveIcon from '../assets/go.svg';
import { LazyMotion, domAnimation, m } from 'framer-motion';

interface Props {
	category: string;
	desc: string;
	tech1: string;
	tech2: string;
	tech3: string;
	tech4: string;
	image: string;
    liveLink: string
}

function ProjectsDetailsEven({
	category,
	desc,
	tech1,
	tech2,
	tech3,
	tech4,
	image,
    liveLink
}: Props) {
	return (
		<div className='project__detailsEven'>
			<LazyMotion features={domAnimation}>
				<m.div animate={{ opacity: 1 }} className='project__image'>
					<img src={image} alt='portfolio_pics' style={{ width: '100%' }} />
				</m.div>
			</LazyMotion>
			<div className='project__info'>
				<h3 className='info__h3'>{category}</h3>
				<p className='info__p'>{desc}</p>
				<ul>
					<li className='info__li'>{tech1}</li>
					<li className='info__li'>{tech2}</li>
					<li className='info__li'>{tech3}</li>
					<li className='info__li'>{tech4}</li>
				</ul>
				<div className='project__link'>
					<a href={liveLink} target="_blank" rel="noopener noreferrer">
						<img src={LiveIcon} alt='Link' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectsDetailsEven;
