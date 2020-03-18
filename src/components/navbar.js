import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
			<Link to="/" className="navbar-brand">
				ExerTrack
			</Link>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="navbar-item">
						<NavLink
                            to="/exercises"
							activeClassName="active"
							className="nav-link"
						>
							Exercises
						</NavLink>
					</li>
					<li className="navbar-item">
						<NavLink
							to="/create"
							activeClassName="active"
							className="nav-link"
						>
							Create Exercise Log
						</NavLink>
					</li>
					<li className="navbar-item">
						<NavLink
							to="/user"
							activeClassName="active"
							className="nav-link"
						>
							Create User
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
