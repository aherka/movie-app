import React, {Component} from 'react';

import { Input } from './InputStyle';
import { Submit } from './ButtonStyle';

import './style.css'

export default class SearchBar extends Component {

    state={value: '', filtersOpened: false}

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleClick(e) {
        this.setState(prevState => ({
            filtersOpened: !prevState.filtersOpened
          }));
    }

    handleSortChange(e) {
        this.props.onSortChange(e.target.name, e.target.value);
    }

    render() {
        const {onSubmit} = this.props;

        const currentYear = new Date().getFullYear();
        let yearArray = [];

        for (let i = currentYear; i >= 1910; i--)
            yearArray.push(i);
            
        
        const yearOptions = yearArray.map((year)=> <option value={year} key={year}>{year.toString()}</option>)

        return(
            <form onSubmit={onSubmit} autoComplete="off">
                <Input  response={this.props.response}type='text' placeholder='Enter movie name' name='search' value={this.state.value} onChange={(e) => this.handleChange(e)} />
                <Submit type='submit'>Search</Submit>

                <div className='imgContainer'>
                    <img className={this.state.filtersOpened ? 'moreImg iOpened' : 'moreImg iClosed' } src={require('./add.png')} alt='more' onClick={(e) => this.handleClick(e)}/>
                </div>

                <div className={this.state.filtersOpened ? 'filter opened' : 'filter closed' }>

                    <p>Type</p>
                    <select name="type" className={this.state.filtersOpened ? 'box opened' : 'box closed' }>
                        <option value="">Any</option>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                        <option value="episode">Episode</option>
                    </select>
                    <p>Year</p>
                    <select name="year" className={this.state.filtersOpened ? 'box opened' : 'box closed' }>
                        <option value="">Any</option>
                        {yearOptions}
                    </select>

                    <p>Sort Year</p>
                    <select 
                    name="sortYear" 
                    className={this.state.filtersOpened ? 'box opened' : 'box closed'}
                    onChange={(e) => this.handleSortChange(e)}>
                        <option value="none">None</option>
                        <option value="decreasing">Decreasing</option>
                        <option value="increasing">Increasing</option>
                    </select>
                    <p>Sort Name</p>
                    <select name="sortName" className={this.state.filtersOpened ? 'box opened' : 'box closed' }
                    onChange={(e) => this.handleSortChange(e)}>>
                        <option value="none">None</option>
                        <option value="decreasing">Decreasing</option>
                        <option value="increasing">Increasing</option>
                    </select>

                </div>
            </form>
        );
    }
}
