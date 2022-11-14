import React from "react";
import { NavLink } from "react-router-dom";
import './style/VideogameCard.css'

export function VideogameCard ({name, image, genre, id}) {

	return (
		<>
			<NavLink to={`/detail/${id}`}>
				<div className="card">
					<img src={image} alt='img'/>
					<div className="container">
						<h1>Name: {name}</h1>
						<h2>Genres: {genre}</h2>
					</div>
				</div>
			</NavLink>
		</>
	)
}