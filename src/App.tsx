import React, { useState } from 'react';
import './App.css';
import StarRating from './components/StarRating/StarRating';
import Fun from './components/Fun/Fun';

function App() {
    const [label, setLabel] = useState('testeee');

    return (
        <div>
            <button onClick={() => setLabel(label + '+')}>
                Change label
            </button>
            <div className="App">
                <div>learn react</div>
                <StarRating label={label}></StarRating>
            </div>
        </div>
    );
}

export default App;

