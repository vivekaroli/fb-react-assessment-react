import React, {useState} from 'react';
import { Card } from 'react-bootstrap';

 const CardView = (props) => {
    const {movie} = props;
    const {movieName , rating, releasedDate} = movie
    return (
        <Card className='cardStyle'>
            <h3>{movieName}</h3>
            <h5>Rating - {rating}/5</h5>
            <h5>Released Year - {releasedDate}</h5>
        </Card>
    )
}
export default CardView