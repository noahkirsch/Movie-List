class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			searchValue: '',
			addValue: '',
			noResultsMessage: null
		};
		this.handleSearchClick = this.handleSearchClick.bind(this);
		this.handleAddClick = this.handleAddClick.bind(this);
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleAddChange = this.handleAddChange.bind(this);
	}

	handleSearchChange(event) {
		this.setState({searchValue: event.target.value});
	}

	handleAddChange(event) {
		this.setState({addValue: event.target.value});
	}

	handleSearchClick(e) {
		e.preventDefault();
		var searchValue = this.state.searchValue;
		var movies = this.state.movies;

		for (var i = movies.length - 1; i >= 0; i--) {
			if (!movies[i].title.toLowerCase().includes(searchValue.toLowerCase())) {
				movies.splice(i, 1);
			}
		}

		if (movies.length === 0) {
			this.setState({noResultsMessage: 'No results found'});
		}

		this.setState({movies: movies});
	}

	handleAddClick(e) {
		e.preventDefault();
		var movies = this.state.movies;
		movies.push({
									title: this.state.addValue,
									year: '2108',
									runtime: '120 min',
									metascore: 46,
									imdbRating: 6.2,
								});

		this.setState({movies: movies, addValue: '', noResultsMessage: null});
	}

	apiSearch(query) {
		
	}

	render() {
		return (
			<div>
				<h1>Movie List!</h1>

				<form>
      		<input type="text" placeholder="Add a video.." value={this.state.value} onChange={this.handleAddChange}></input>
      		<button  onClick={this.handleAddClick} type="submit"><i>Add</i></button>
    		</form>

				<form>
      		<input type="text" placeholder="Search.." value={this.state.value} onChange={this.handleSearchChange}></input>
      		<button onClick={this.handleSearchClick} type="submit"><i>Search</i></button>
    		</form>
    		<div>{this.state.noResultsMessage !== null ? this.state.noResultsMessage : ''}</div>
				<div> {this.state.movies.map((element) => (
					<div className="movie">
						<div>{element.title}</div>
						<div>Year: {element.year}</div>
						<div>Runtime: {element.runtime}</div>
						<div>Metascore: {element.metascore}</div>
						<div>imdbRating: {element.imdbRating}</div>
					</div>
				))} </div>
			</div>
		)
	}
}		

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
