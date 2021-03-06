import React from 'react';
import propTypes from 'prop-types';

export class MovieCard extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;
        return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;   
     }
}
// MovieCard.propTypes = {
//     movie: PropTypes.shape({
//       Title: PropTypes.string
//     }).isRequired,
//     onMovieClick: PropTypes.func.isRequired
//   };