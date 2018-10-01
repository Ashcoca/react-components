// // TODO

// // var GroceryList = () => (
// //     <div id="GroceryList"/>
// // );

// // var App = () => (
// //     <div>
// //         <h2>Grocery List</h2>
// //         <ul>Manwiches</ul>
// //         <ul>Animal Crackers</ul>
// //     </div>

// // );

// // var GroceryList = (props) => {

// //     var onListItemClick = (event) => {
// //         console.log('I got clicked!');
// //     };
// //     //must use return statement b/c of curly braces
// //     return (
// //     <ul>
// //         <li onClick={onListItemClick}>{props.groceries[0]}</li>
// //         <li>{props.groceries[1]}</li>
// //         <li>{props.groceries[2]}</li>
// //         <li>{props.groceries[3]}</li>
// //     </ul>
// //     );
// // };




// // var Cucumbers = () => (
// //     <div>Cucumbers</div>
// // );

// // var Manwiches = () => (
// //     <div>Manwiches</div>
// // );


// //*********

// // A class component can be defined as an ES6 class
// that extends the ***base Component class*** included in the React library
class GroceryListItem extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
          done: false
      };
    }

    //toggle the done boolean on click
    onListItemClick() {
        this.setState({
            done: !this.state.done
        });
    }

  render() {
    return (

    var style = {
        textDecoration: this.state.done ? 'line-through' : 'none'
    };
        <li style={style} onClick={this.onListItemClick.bind(this)> {this.props.groceries}</li>
    );
  }
};

var GroceryList = (props) => (
    <ul>
        {props.groceriesList.map(groceries =>
        <GroceryListItem groceries={groceries} />
        )}
    </ul>
);

var App = () => (
    <div>
        <h2>My Grocery List</h2>
        <GroceryList groceries = {['Manwiches', 'Cucumbers', 'Pizza Rolls', 'Bananas']}/>
    </div>
ReactDOM.render(<App />, document.getElementById("app"));

