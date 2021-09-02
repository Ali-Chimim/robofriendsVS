import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';
/**
 * Quand on utilise le state il faut utiliser 
 * des classes
 */
class App extends React.Component{
    constructor(){
        super();
        this.state= {
            robots:robots,
            searchField:''
        }
    }
    onSearch = (event)=>{
        this.setState({
            searchField:event.target.value
        });
      
    }
    render (){
        const branch ="THIS IS A NEW BRANCH";
        const filteredRobots = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchField);
        } )
        return (
            <div className = "App"> 
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox onSearch={this.onSearch}/>
                <CardList robots ={filteredRobots}/>
            </div>    
        );
    }
}
export default App;