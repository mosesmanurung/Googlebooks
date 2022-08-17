import React from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const BookCard = (props) => {
    return(
        <div className='card-container'>
            <h2>{props.title}</h2>
            <img src={props.image} alt=''/>
            <div className='desc'>
                <h3>{props.author}</h3>
                <h3>{props.rating}</h3>
                <Rater interactive={props.Rating} />
            </div>
        </div>
    )
}

export default BookCard;