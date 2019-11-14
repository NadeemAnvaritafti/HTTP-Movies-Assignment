import React, { useState, useEffect } from "react";
import axios from "axios";


const UpdateMovie = (props) => {

  const [movieData, setMovieData] = useState({
    title: '',
    director: '', 
    metascore: '',
    stars: []
  });

  const update = (e) => {
    e.preventDefault();
    
  }

    const handleChange = e => {
        setMovieData({
            ...workout,
            [e.target.name]: e.target.value
        })
    }

  return (
    <>
    <div>
    <h1>Update Movie</h1>
      <form onSubmit={update}>
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
        placeholder="Stars"
        value={movieData.stars}
        onChange={handleChange}
        />
        
        <button className="button" type="submit">Submit</button>

      </form>
      </div>
    </>
  );
};

export default UpdateMovie;
