import React, {Component} from 'react';
import { RatingBar } from './RatingBarStyle';



export default class Rating extends Component {
    
    toRate(s) {
        if (s.includes('%')) {
            let rate = parseFloat(s);
            return rate / 100;
        }
        else {
            let rate = s.split('/');
            return parseFloat(rate[0]) / parseFloat(rate[1])
        }
    }
    
    render() {
        const {source, value} = this.props;

        return(
            <div className='ratingDiv'>
                <svg class="ratingBarSvg" width="100" height="100">
                    <RatingBar rating={this.toRate(value)} d="M50 95 A45 45 1 1 1 51 95z" strokeWidth="8" fill="none" />
                    
                </svg>
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