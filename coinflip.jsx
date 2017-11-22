// DUMB-component - it doesn't care what the terst of the application is doing
// function CoinFlip(props){
// 	return (
// 		<h1>{props.title}</h1>
// 	)
// }
// Smart or stateful component cares whats going on at an application level
// The same X will return a different Y base on the state of the application

// ES5 way, you will hardly see it, but you will see it 
// var CoinFlip = React.createClass({
// 	render: function(){
// 		return <h1>Sanity CHeck </h1>
// 	}
// });
 // helper method that allows you to create a class in es 5, it takes and object, objects have properties the only rule for these properties is it must have a render function


// this is a smart component, dumb components (we will strill make them);
class CoinFlip extends React.Component{
	constructor(props){
		// this is a child class of the React.Component class, we must called super to use it
		super();
		this.test = "this is a test class property";
		this.title = props.title;
	}
	// This one function we must have in a component is .... 
	render(){
		// render must  return a single dom element
		return (
			<h1>{this.title}</h1>
		)
	}
}







ReactDOM.render(
	<CoinFlip title="flip the coin"/>,
	document.getElementById("root")
)