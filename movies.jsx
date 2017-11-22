

class Movies extends React.Component(){
	// if we are going to extend something we need to super
	constructor(){
		super();
	}
	// we must have this METHODS.....
	render(){
		return(
			<h1>Sanity Chek</h1>
		)
	}
}

ReactDOM.render(
	<Movies />,
	document.getElementById('root')
)