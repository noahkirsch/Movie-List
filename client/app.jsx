class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [
			  {title: 'Mean Girls'},
			  {title: 'Hackers'},
			  {title: 'The Grey'},
			  {title: 'Sunshine'},
			  {title: 'Ex Machina'},
			],
			searchValue: '',
			noResultsMessage: null
		};
		this.handleSearchClick = this.handleSearchClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({searchValue: event.target.value});
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

	render() {
		return (
			<div>
				<h1>Movie List!</h1>
				<form>
      		<input type="text" placeholder="Search.." value={this.state.value} onChange={this.handleChange}></input>
      		<button onClick={this.handleSearchClick} type="submit"><i>Search</i></button>
    		</form>
    		<div>{this.state.noResultsMessage !== null ? this.state.noResultsMessage : ''}</div>
				<div> {this.state.movies.map((element) => (<div>{element.title}</div>))} </div>
			</div>
		)
	}
}		

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
