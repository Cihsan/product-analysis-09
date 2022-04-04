import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Review = (props) => {
    const {name,pic,review,rating}=props.review
    
    return (
        <div>
            <div className='line'>
                <div className='d-flex'>
                    <img src={pic} alt="" />
                    <h5>{name}</h5>
                </div>
                <div>
                    <p className='m'>{review.slice(0,200)}</p>
                </div>
                <small><Rating initialRating={rating}emptySymbol={<FontAwesomeIcon icon={faStar} />}fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}readonly></Rating></small>
            </div>
        </div>
    );
};

export default Review;