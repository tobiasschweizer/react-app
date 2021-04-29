import React from 'react';
import './App.css';
import StarRating from './components/StarRating/StarRating';
import Fun from './components/Fun/Fun';

function App() {
  return (
    <div className="App">
        <div>learn react</div>
        <StarRating label={'test'}></StarRating>
        <StarRating label={'gugus'}></StarRating>
        <Fun label="test"></Fun>
    </div>
  );
}

export default App;
