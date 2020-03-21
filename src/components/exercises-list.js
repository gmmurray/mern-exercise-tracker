import React, { useState, useEffect } from 'react';
import {Exercise} from './exercise';
import axios from 'axios';


export const ExercisesList = () => {
	const [exercises, setExercises] = useState([]);

	const getExercises = () => {
		axios
			.get('http://localhost:5000/exercises/')
			.then(res => {
                console.log(res.data);
				setExercises(res.data);
			})
			.catch(err => {
				console.log(err);
            });
            
            console.log(exercises);
    };
    
	useEffect(getExercises, []);

	const deleteExercise = id => {
		axios
			.delete(`http://localhost:5000/exercises/${id}`)
			.then(res => console.log(res.data))
			.catch(err => console.log(err));
		setExercises(exercises.filter(exercise => exercise._id !== id));
	};


    const renderExerciseList = () => {
        console.log(exercises);
        return (
            exercises.map((exercise => {
                return <Exercise exercise={exercise} deleteExercise={deleteExercise} key={exercise._id} />
            }))
        );
    }

	return (
		<div>
			<h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderExerciseList()}
                </tbody>
            </table>
		</div>
	);
};
