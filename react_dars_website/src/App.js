import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {  // state is something that could change
            robots: robots,
            searchfield: ''
        }
    }

    componentDidMount() {
        
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }); //need to do this instead of this.state.searchfield = value
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            //return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            if (this.state.searchfield.toString() === "")
              return true;
            else
              return robot.number.toString() === this.state.searchfield.toString();

        })

        return (    
            <div className='tc'>
                <h1><strong>Lakers Players Index</strong></h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;