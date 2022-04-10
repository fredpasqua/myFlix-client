import React from 'react';
import propTypes from 'prop-types';
<<<<<<< Updated upstream
=======
import './movie-view.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

>>>>>>> Stashed changes
export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick } = this.props;
    
    return (
    <div className="movie-view">
<<<<<<< Updated upstream
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
=======

<Row> 
        <Col><h1 className='page_title'>Movie Info</h1></Col>
        
    </Row>
        <Row>
            <Col> 
                 <div className="movie-poster"><img src={movie.ImagePath}  /></div>
             </Col>
             <Col>
            <div className="movie-info">
                 <div className="movie-title">
                     <span className="label">Title: </span>
                     <span className="value">{movie.Title}</span>
                 </div>
                <div className="movie-director">
                    <span className="label">Director: </span>
                    <span className="value">
                        <Link to={`/directors/${movie.Director.Name}`}>{movie.Director.Name}</Link>
                    </span>
                 </div>
                 <div className="movie-genre">
                     <span className="label">Genre: </span>
                     <span className="value">
                         <Link to={`/genres/${movie.Genre.Name}`}>{movie.Genre.Name}</Link></span>
                 </div>
                    


            </div>
                 </Col>
            
        </Row>
        <Row className="justify-content-center">
        <div className="movie-description">
            <span className="label">Description: </span>
            <span className="value">{movie.Description}</span>
        </div><Button className="button" onClick={() => { onBackClick(); }}>Back</Button></Row>
       
>>>>>>> Stashed changes
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
