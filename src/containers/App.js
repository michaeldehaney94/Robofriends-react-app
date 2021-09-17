import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    //mount lifecycle
    //fetch data from json api to GET data
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({ robots:users });
        })
        
    }

    //event listener function
    onSearchChange = (event) => {
        //add 'setState' to update searchfield state or any state
        this.setState({ searchfield: event.target.value })
        //console.log(event.target.value);
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase()
            .includes(searchfield.toLowerCase());
        }) 

        //if there are multiple users to load which may take time
        return !robots.length ?
        <h1 className="tc">Loading...</h1> :
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/> 
                </Scroll>
            </div> 
        );
    } 
}


export default App;

//STATE is an object that desctibes the application
//state is able to change it's value
//PROPS are values that come from state
//the state tells the props what values is to be passed

//Lifecycle Methods or Hooks 
//METHODS - Mounting, Updating, Unmounting
//it automatically triggers when the app is loading on a website.
//These are called lifecycle hooks because each time they run, a component does something