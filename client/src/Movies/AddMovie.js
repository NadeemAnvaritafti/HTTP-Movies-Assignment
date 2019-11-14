import React, { useState, useEffect } from "react";
import axios from "axios";


const AddMovie = (props) => {

    const [movieData, setMovieData] = useState({
        title: '',
        director: '', 
        metascore: '',
        stars: []
    });

    const handleChange = e => {
        let value = e.target.value;
        if (e.target.name === 'stars') {
            value = value.split(',');
        }
        setMovieData({
            ...movieData,
            [e.target.name]: value
        })
    }


    const add = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/api/movies`, movieData)
        .then(res => {
            console.log(res.data);
            props.setMovies(res.data);
            props.history.push('/');
        })
        .catch(err => console.log(err));
    }

    

    return (
        <div>
        <h1>Add Movie</h1>
        <form onSubmit={add}>
            <label htmlFor='title'>Title:</label>
            <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={movieData.title}
            onChange={handleChange}
            />

            <label htmlFor='director'>Director:</label>
            <input
            type="text"
            name="director"
            id="director"
            placeholder="Director"
            value={movieData.director}
            onChange={handleChange}
            />

            <label htmlFor='metascore'>Metascore:</label>
            <input
            type="text"
            name="metascore"
            id="metascore"
            placeholder="Metascore"
            value={movieData.metascore}
            onChange={handleChange}
            />

            <label htmlFor='stars'>Stars:</label>
            <input
            type="text"
            name="stars"
            id="stars"
            placeholder="Stars (separated by commas)"
            value={movieData.stars}
            onChange={handleChange}
            />

            <button type="submit">Add Movie</button>

        </form>
        </div>
    );
};

export default AddMovie;
