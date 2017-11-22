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
		// nothing about title, react doesn't care about it at all
		this.title = props.title;
		// satate is special, react cares alot
		this.coin =[
			'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
			'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'
		]
		this.state = {
			image: this.coin[0]
		}
		this.flipCoin = this.flipCoin.bind(this);
	}

	flipCoin(){
		console.log("flip Coin ran");
		var coinSide = Math.round(Math.random());
		// we are going to change this.state
		// Listen. Really, Listen
		this.setState({
			image: this.coin[coinSide]
		})
	}
	// This one function we must have in a component is .... 
	render(){
		// render must  return a single dom element
		return (
			<div className="coin-flip">
				<h1>{this.title}</h1>
				<div>
					<button onClick={this.flipCoin}>Click to Flip the coin</button>
					<img src={this.state.image} alt="" srcset=""/>
				</div>
			</div>
		)
	}
}


function Index(){
	return (
		<div>
			<CoinFlip title="flip the coin"/>
		</div>
	)
}




ReactDOM.render(
	<Index />,
	document.getElementById("root")
)