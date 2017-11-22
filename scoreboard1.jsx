// ReactDOM.render() puts a component into the dom
// it takes two args:
// what
// where

// must use className instead of class because it is reserved as key word
// component called application
// component are Uppercase, all component must return a single DOM, no expcetion to this
function Application(props) {
    return (
        <div className="scoreboard">
            <div className={"header"}>
                <h1>{props.title}</h1>
            </div>
            <div className={"teams"}>
                <div className={"team"}>
                    <div className={"team-name"}>
                        Columbus
                    </div>
                    <div className={"counter"}>
                        <button className={"minus"}>-</button>
                        <div className={"team-score"}>
                            0
                        </div>
                        <button className={"plus"}>+</button>
                    </div>
                </div>
                <div className={"team"}>
                    <div className={"team-name"}>
                        Toronto
                    </div>
                    <div className={"counter"}>
                        <button className={"minus"}>-</button>
                        <div className={"team-score"}>
                            0
                        </div>
                        <button className={"plus"}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


ReactDOM.render(
    // pass our title as an attribute, it will come trhough to the compnent as props
    <Application title={"MLS SEMI FINAL SCOREBOARD"}/>,
    document.getElementById("root")
)