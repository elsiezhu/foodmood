import React from 'react';
import '../App.css';
import './middle.css'
import FoodCards from './foodcards';

function Middle() {
    return (
        <div className={'middle-container'}>
            <h1>foodmood :)</h1>

            <FoodCards />

        </div>
    );
}

export default Middle;