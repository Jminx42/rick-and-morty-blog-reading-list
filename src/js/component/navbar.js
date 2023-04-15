import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 px-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ps-5"><img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo-700x394.png" height={"100px"} /></span>
				
			</Link>
			<div className="ms-auto pe-5">
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle p-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favourites <span className="badge bg-secondary">0</span>
				</button>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">(empty)<i className="fa-regular fa-trash-can"></i></a></li>
					<li><a className="dropdown-item" href="#">Another action</a>
					<i className="fa-regular fa-trash-can"></i></li>
					<li><a className="dropdown-item" href="#">Something else here</a>
					<i className="fa-regular fa-trash-can"></i></li>
				</ul>
			</div>
			
			</div>
		</nav>
	);
};
