
function Poster(props){
	return (
		<div className="col-sm-12 col-md-4 col-lg-3">
			<img src={props.image}/>
		</div>
	)
}


class Movies extends React.Component{
	// if we are going to extend something we need to super
	constructor(){
		super();
		this.state={
			moviesToShow: []
		}
	}

	//only happen one time after the code is runs RENDER function
	componentDidMount(){ // this method is special, we can make our own methods, but this is used by React.Component
		console.log("movies was just put into the DOM");
		var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
		$.getJSON(url, (movieData)=>{
			console.log(movieData);
			var nowPlaying = [];
			movieData.results.map((movie)=>{
				nowPlaying.push(movie);
			});
			this.setState({
				moviesToShow: nowPlaying
			})
		})
	}
	// we must have this METHODS.....
	render(){
		const imagePath = "http://image.tmdb.org/t/p/w300";
		var moviesList =[];
		this.state.moviesToShow.map((movie)=>
		{
			var fullImagePath = imagePath + movie.poster_path;
			// moviesList is an array of components
			moviesList.push(<Poster image={fullImagePath}/>);
		})
		return(
			<div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <div className="th-wrapper">
                            <button className="btn btn-primary">Reset Search</button>
                        </div>
                        <div className="movie-rows">
                            {/* Movies go here! */}
							{moviesList}
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}

ReactDOM.render(
	<Movies />,
	document.getElementById('root')
)