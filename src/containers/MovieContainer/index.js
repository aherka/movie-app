import React, {Component, Fragment} from 'react'
import SearchBar from '../../components/SearchBar';
import MovieItem from '../../components/MovieItem';

const API = 'http://www.omdbapi.com/?apikey=c38f2b3b&s=';

export default class MovieContainer extends Component {

    state = { 
        data: [],
        info: {id:'',data:{}},
        response: true,
        sortYear: 'none',
        sortName: 'none',
        detailed: false
    };

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            sortYear: e.target.sortYear.value, 
            sortName : e.target.sortName.value});


        const searchQuery = e.target.search.value;
        const typeQuery = e.target.type.value;
        const yearQuery = e.target.year.value;

        if (searchQuery === '') {
            //alert('Enter a movie name');
            this.setState({response: false})
        }
        else {
            let query = searchQuery;
            if(typeQuery !== "any")
                query += "&type=" + typeQuery;
            if(yearQuery !== "any")
                query += "&y=" + yearQuery;
            fetch(API + query)
                .then(response => response.json())
                .then(val => 
                    {
                        if(val.Response === "True")
                            this.setState({ data: val.Search, response:true})
                        else {
                            this.setState({ response:false})
                            alert(val.Error);
                        }
                    }
                )
        }
            
    }

    handleSortChange(sortName, sortType) {
        if(sortName==='sortName')
            this.setState({sortName: sortType});
        if(sortName==='sortYear')
            this.setState({sortYear: sortType});
    }

    handleMovieClick(index, detailed) {
        this.setState({detailed: detailed});
        fetch('http://www.omdbapi.com/?apikey=c38f2b3b&i=' + index)
                .then(response => response.json())
                .then(val => 
                    {
                        if(val.Response === "True")
                            this.setState({ info: {id:index,data:val}})
                        else {
                            alert(val.Error);
                        }
                    }
                )
    }

    render() {

        const movies = this.state.data;
        const selectedMovie = this.state.info;
        const {sortName, sortYear} = this.state;
        let movieItems = null;

        if (movies.length){

            if(sortYear === 'increasing')
                movies.sort((a,b)=> {return a.Year.localeCompare(b.Year)} );
            else if(sortYear === 'decreasing')
                movies.sort((a,b)=> {return b.Year.localeCompare(a.Year)} );

            if(sortName === 'increasing')
                movies.sort((a,b)=> {return a.Title.localeCompare(b.Title)} );
            else if(sortName === 'decreasing')
                movies.sort((a,b)=> {return b.Title.localeCompare(a.Title)} );


            movieItems = movies.map((item) => {
                return(
                    <MovieItem 
                        name={item.Title}  
                        key={item.imdbID} 
                        imdbID={item.imdbID} 
                        img={item.Poster}
                        year={item.Year}
                        info={item.imdbID === selectedMovie.id ? selectedMovie.data : null}
                        opened={item.imdbID === selectedMovie.id ? true : false}
                        onMovieClick={(index, detailed)=> this.handleMovieClick(index, detailed)}
                    />
                );
            }
            );

        }

        // const movieID = this.state.info.id;
        // if(movieID !== '') {
        //     console.log(movieID)
        //     movieItems.splice(movieItems.findIndex((movie)=>{console.log(movie);return movie.props.imdbID === movieID}),0,<MovieInfo name={this.state.info.data.Title}/>)
        // }

        //console.log(movieItems);
        //movieItems.splice(movieItems.indexOf(),0,<p>asd</p>)

        return (
            <Fragment>
                <SearchBar 
                    onSubmit={(e)=> this.handleSubmit(e)}
                    onSortChange={(n, t)=> this.handleSortChange(n, t)}
                    response={this.state.response}/>
                <div className={this.state.detailed ? 'movieContainer detailed' : 'movieContainer'}>
                    {movieItems}
                </div>
            </Fragment>
      );
    }
  }
  