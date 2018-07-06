import React, {Component} from 'react';



export default class Rating extends Component {
    render() {
        const {source, value} = this.props;

        return(
            <div className='ratingDiv'>
                <img className='ratingImg' src={source==='Metacritic'
                    ? require('./Logo/meta.png')
                    : source==='Rotten Tomatoes'
                        ? require('./Logo/rotten.png')
                        : require('./Logo/imdb.png')} alt='rating'/>
                <p className='ratingValue'>{value}</p>
            </div>
        );
    }
}