import React from 'react';
import { NavLink } from 'react-router-dom';
import storageService from '../../core/services/storageService';
import './Header.css';
import HomeIcon from '../../assets/images/home-icon.svg';

const header = () => (
	<header className="header">
		<nav className="nav">
			<NavLink exact to="/">
				<img src={HomeIcon} className="home-icon" alt="Funny movies" />{' '}
				Funny Movies
			</NavLink>
			<div className="rightNav">
				{storageService.getCurrentUser() ? (
					<>
						<span className="user-name">
							Welcome {storageService.getCurrentUser()}
						</span>
						<NavLink to="/share">Share Video</NavLink>
						<NavLink
							to="/auth/login"
							onClick={storageService.removeAuth}
						>
							Logout
						</NavLink>
					</>
				) : (
					<>
						<NavLink to="/auth/login">Login</NavLink>
						<NavLink to="/sign-up">Register</NavLink>
					</>
				)}
			</div>
		</nav>
	</header>
);

export default header;
