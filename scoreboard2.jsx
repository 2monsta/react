// ReactDOM.render() puts a component into the dom
// it takes two args:
// what
// where

// must use className instead of class because it is reserved as key word
// component called application
// component are Uppercase, all component must return a single DOM, no expcetion to this

//this app works except for the buttons but its huge, i would much rather paste this in to the html
// lets break it up into pieces ie. components
// Application
// --header
// --team
//     --counter
// --team
//     --counter


function Header(props){
    return (
        <div className={"header"}>
            <h1>{props.title}</h1>
        </div>
    )
}

function Team(props){
    return (
        <div className={"team"}>
            <div className={"team-name"}>
                {props.name}
            </div>
            <div className={"counter"}>
                <button className={"minus"}>-</button>
                <div className={"team-score"}>
                    {props.score}
                </div>
                <button className={"plus"}>+</button>
            </div>
        </div>
    )
}
function Application(props) {
    return (
        <div className="scoreboard">
            <Header title={props.title}/>
            <div className={"teams"}>
                <Team name={"Columbus"} score={"0"}/>
                <Team name={"Toronto"} score={"0"}/>
            </div>
        </div>
    )
}
ReactDOM.render(
    // pass our title as an attribute, it will come trhough to the compnent as props
	<Application title={"MLS SEMI FINAL SCOREBOARD"}/>,
    document.getElementById("root")
)