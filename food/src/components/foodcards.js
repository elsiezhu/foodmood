import React, { useState } from 'react';
import '../App.css';

function FoodCards() {
    // setting a variable called food, for the information in the card.
    // TODO: replace these hardcoded values with random data from MongoDB 
    const [food, setFood] = useState([
        {
            food: "Dumplings",
            url: ''
        },
        {
            food: "Mango Lassi",
            url: ''
        }
    ]);
    
    return (
        <div>
            <h2>Hi ! :)</h2>

            {/* .map() is to loop through the array */}
            {food.map(food => (
                <FoodCard>
                    <div 
                    style={{backgroundImage: `url(${food.url})` }}
                    className="card">
                        <h3>{food.food}</h3>
                    </div>
                </FoodCard>
            ))}
        </div>
    );
}

export default FoodCards;