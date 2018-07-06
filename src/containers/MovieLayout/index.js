import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import './style.css'
import Rating from './Rating';

export default class MovieLayout extends Component{

    render(){
        if(this.props.location.state)
        {
            const {data} = this.props.location.state;

            const ratings = data.Ratings.map(item => { return (<Rating source={item.Source} value={item.Value} key={item.value}/>);})

            return (
                <div className='moviePage'>
                    <div className='moviePageHead' style={{backgroundImage:`url(${data.Poster})`}}>
                        <p className='mTitle'>{data.Title}</p>
                        <p className='mYear'>{data.Year}</p>
                    </div>
                    <div className='moviePageBody'>
                    <div style={{margin:'10 auto', width:'100%', textAlign:'center'}}>
                        {ratings}
                    </div>
                    <p>{data.Director}</p>
                    <p>{data.Writer}</p>
                    <p>{data.Actors}</p>
                    <p>{data.Released}</p>
                    <p>{data.Genre}</p>
                    <p>{data.Plot}</p>

                    </div>
                </div>
            );
        }
        else
        {
            return(
                <Redirect to='/'/>
            );
        }
    }
}
