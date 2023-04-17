import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	return (
		<div className="container">
			<div className="row text-center">
				<div className="col-6">
					<img src={store.singleCharacter.image} />
				</div>
				<div className="col-6">
					<h2 className="">{store.singleCharacter.name}</h2>
					<p className=""></p>
				</div>
			</div>
			<div className="row">
				<div className="col-12 text-danger">
					<hr></hr>
					<table className="table text-danger">
					<thead>
						<tr>
						<th scope="col"></th>
						<th scope="col">Name</th>
						<th scope="col">Status</th>
						<th scope="col">Species</th>
						<th scope="col">Gender</th>
						<th scope="col">Origin</th>
						<th scope="col">Location</th>
						</tr>
					</thead>
					<tbody>
						<tr>
						<th scope="row"></th>
						<td>{store.singleCharacter.name}</td>
						<td>{store.singleCharacter.status}</td>
						<td>{store.singleCharacter.species}</td>
						<td>{store.singleCharacter.gender}</td>
						<td>{store.singleCharacter.origin.name}</td>
						<td>{store.singleCharacter.location.name}</td>
						</tr>
						
					</tbody>
					</table>
					
				</div>
			</div>

			

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
