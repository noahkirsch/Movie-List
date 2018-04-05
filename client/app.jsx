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
			]
		}
	}

	render() {
		console.log(this.state.movies);
		return (
			<div>
				<h1>Movie List!</h1>
				<div> {this.state.movies.map((element) => (<div>{element.title}</div>))} </div>
			</div>
		)
	}
}		

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
