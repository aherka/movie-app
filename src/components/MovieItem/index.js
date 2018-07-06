import React, {Component} from 'react';
import { Div } from '../MovieItem/DivStyle';
import { InfoDiv } from '../MovieItem/InfoStyle';
import './style.css'

import {Link} from 'react-router-dom'

export default class MovieItem extends Component {

    state={detailed: false}

    handleClick = () => {

        
        

        if(!this.props.opened){
            this.setState({detailed: true})
        }
        else
        this.setState(prevState => ({
                detailed: !prevState.detailed
              }));


        this.props.onMovieClick(this.props.imdbID, !(this.state.detailed && this.props.opened));
        
    }

    render() {
        return(
            <Div 
                className={this.state.detailed && this.props.info?'movie detailed':'movie'}
                img={this.props.img}
                value={this.props.imdbID}
                onClick={this.handleClick}>
                <InfoDiv className='info'>
                    <p>{this.props.name}</p>
                    <p>{this.props.year}</p>
                </InfoDiv>
                <div className='detail'>
                    <p className='title'>{this.props.info?this.props.info.Title:null}  ({this.props.info?this.props.info.Year:null})</p>
                    <p className='director'>Director: {this.props.info?this.props.info.Director:null}</p>
                    <p className='cast'>Cast: {this.props.info?this.props.info.Actors:null}</p>
                    <p className='desc'>{this.props.info?this.props.info.Plot:null}</p>

                    <Link to={{
                        pathname:`/movies/${this.props.imdbID}`,
                        state:{data:this.props.info}}}>More Details</Link>
                </div>
            </Div>
        );
    }
}
