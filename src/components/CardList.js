import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    return (
        <div>
            { //wrapped in curly braces to show that its javascript code
                robots.map((user, i) => {
                    //i for array 'index'
                    //key={i} identifies what is or was in the array
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                        />
                    );
                })
            }
       </div> 
    );
}

export default CardList;