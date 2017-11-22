// ReactDom is available beacuse we included reactDOM.js

// my first react component how exciting!
//a component in react should be uppercased!!!!
function Application(){
    // A react component must return 1, and ONLY 1 DOM element;
    // A component cant pass prop to another compoent inside of it
    // props be passed as html attr and will be availabe in the child compoent
    var ZackSeat = 1;
    return(
        <div id="parent">
            <div class="sibling">
                <Student name="Jennifer" seat = "3"/>
                <Student name={"Zack"} seat={ZackSeat}/>
                <Student />
            </div>
        </div>
    )
}


function Student(props){
    // this is a component, which returns a single DOM element
    return (
        <li>{props.name} is in seat {props.seat} </li>
    )


}
ReactDOM.render(
    < Application/>,
    document.getElementById('container')
);