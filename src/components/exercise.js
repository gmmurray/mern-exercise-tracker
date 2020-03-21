import React from 'react';
import { Link } from 'react-router-dom';

export const Exercise = props => {
	const { username, description, duration, date, _id } = props.exercise;
	return (
		<tr>
			<td>{username}</td>
			<td>{description}</td>
			<td>{duration}</td>
			<td>{date.substring(0, 10)}</td>
			<td>
				<Link to={`/edit/${_id}`}>edit</Link> | <a href="#" onClick={() => props.deleteExercise(_id)}>delete</a>
			</td>
		</tr>
	);
};
