class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>This is React!</div>
		)
	}
}		

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
