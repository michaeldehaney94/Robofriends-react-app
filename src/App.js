import React, { Component } from "react";
//import { render } from "react-dom";
import CardList from "./CardList";
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    //event listener function
    onSearchChange = (event) => {
        //add 'setState' to update searchfield state or any state
        this.setState({ searchfield: event.target.value })
        //console.log(event.target.value);
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase()
            .includes(this.state.searchfield.toLowerCase());
        }) 

        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/> 
            </div> 
        );
    }
    
}

export default App;

//STATE is an object that desctibes the application
//state is able to change it's value
//PROPS are values that come from state
//the state tells the props what values is to be passed