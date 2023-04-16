import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
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
					{ store.favouritesList.length === 0 ? 
						<li><a className="dropdown-item">
						(empty)
						</a>
						</li>
					:
						store.favouritesList.map((favourite) => {
							return (
								<li><a className="dropdown-item">
									{favourite}
									<span className="mx-auto"><i className="fa-regular fa-trash-can"></i></span>
									</a>
								</li>
							)
						})
					}

					
				</ul>
			</div>
			
			</div>
		</nav>
	);
};
