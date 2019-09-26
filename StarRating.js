import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StarRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: props.rating || null,
            temp_rating: null
        };
    }

    rate = rating => {
        this.setState({
            rating: rating,
            temp_rating: rating
        });
    };

    starOver = rating => {
        const temp = this.state.rating;
        this.setState({
            rating: rating,
            temp_rating: temp
        });
    };

    starOut = () => {
        this.setState({
            rating: this.state.temp_rating
        });
    };

    render() {
        const { rating } = this.state;
        const stars = [];
        for (let i = 0; i < 5; i++) {
            let starClass = 'star-rating__star';
            if (rating >= i && rating != null) starClass += ' is-selected';

            stars.push(
                <label
                    className={starClass}
                    onClick={() => this.rate(i)}
                    onMouseOver={() => this.starOver(i)}
                    onMouseOut={() => this.starOut()}
                    key={i}
                >
                    ★
                </label>
            );
        }
        return <div className='star-rating'>{stars}</div>;
    }
}

StarRating.defaultProps = {
    rate: 0
};

StarRating.propTypes = {
    rate: PropTypes.number,
    disabled: PropTypes.bool
};

export default StarRating;
