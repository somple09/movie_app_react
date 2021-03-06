import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title}></img>
      <div className="movie__data">
        <Link
          to={{
            pathname: `/movie/${id}`,
            state: {
              id,
              title,
              year,
              summary,
              poster,
              genres,
            },
          }}
        >
          <h3>{title}</h3>
        </Link>
        <span>{year}</span>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="movie__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p>{summary.slice(0, 140)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
