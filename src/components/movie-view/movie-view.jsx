import React from 'react';
import propTypes from 'prop-types';
export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick } = this.props;
    
    return (
    <div className="movie-view">
        <div className="movie-poster"><img src={movie.ImagePath} height="300px" /></div>
        <div className="movie-title">
            <span className="label">Title: </span>
            <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
            <span className="label">Description: </span>
            <span className="value">{movie.Description}</span>
        </div>
        <div className="movie-director">
            <span className="label">Director: </span>
            <span className="value">{movie.Director.Name}</span>
        </div>
        <div className="movie-genre">
            <span className="label">Genre: </span>
            <span className="value">{movie.Genre.Name}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
    </div>
    );
  }
}

MovieView.propTypes = {
    ImagePath: propTypes.string.isRequired,
    Title: propTypes.string.isRequired,
    Description: propTypes.string.isRequired,
    Genre: propTypes.string.isRequired,
    Director: propTypes.string.isRequired
}
