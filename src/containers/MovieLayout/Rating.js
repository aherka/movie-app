import React, {Component} from 'react';
import { RatingBar } from './RatingBarStyle';
import {Motion, spring} from 'react-motion';



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
        const {source} = this.props;

        return(
            <div className='ratingDiv'>
                <svg className="ratingBarSvg" width="100" height="100">
                    
                    <Motion defaultStyle={{x: 0}} style={{x: spring(this.toRate(this.props.value), {stiffness: 80, damping: 30})}}>
                    {value => <RatingBar rating={value.x} d="M50 95 A45 45 1 1 1 51 95z" strokeWidth="8" fill="none" strokeLinecap="round"/>}
                    </Motion>
                    
                </svg>
                <img className='ratingImg' src={source==='Metacritic'
                    ? require('./Logo/meta.png')
                    : source==='Rotten Tomatoes'
                        ? require('./Logo/rotten.png')
                        : require('./Logo/imdb.png')} alt='rating'/>
                <p className='ratingValue'>{this.props.value}</p>
            </div>
        );
    }
}