import MenuIcon from '../assets/menu.svg';
import '../styles/components/nav.css';

function Nav() {
	return (
		<div className='nav'>
			<div className='logo'>Kings</div>
			<div className='nav__menu'>
				<img src={MenuIcon} alt='Menu' />
			</div>
		</div>
	);
}

export default Nav;
