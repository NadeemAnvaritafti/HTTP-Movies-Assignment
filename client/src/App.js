import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from './Movies/UpdateMovie';
import AddMovie from './Movies/AddMovie';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };


  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err.response));
  }, [])

  return (
    <>
      <SavedList list={savedList} />
      <Route 
        exact 
        path="/" 
        render={props => {
          return <MovieList {...props} movies={movies} />
      }}
      />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} movies={movies} setMovies={setMovies}/>;
        }}
      />
      <Route 
        path='/update-movie/:id' 
        render={props => {
          return <UpdateMovie {...props} movies={movies} setMovies={setMovies} />; 
        }}
      />
      <Route 
        path='/add-movie' 
        render={props => {
          return <AddMovie {...props} movies={movies} setMovies={setMovies} />; 
        }}
      />
    </>
  );
};

export default App;
