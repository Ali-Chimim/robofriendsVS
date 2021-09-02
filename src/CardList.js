import React from 'react';
import Card from './Card';
import './CardList.css';

const cardList = (props)=> {
    
    const {robots}=props;
    
    var cardArray = robots.map((robot,index)=>{
        return <Card key={robots[index].id} id= {robots[index].id} name= {robots[index].name} email = {robots[index].email}/>
    })
    
        return(
            <div className= "cardList">
                {cardArray}
            </div> 
        );
    
}

export default cardList;