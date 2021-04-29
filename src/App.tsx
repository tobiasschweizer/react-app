import React from 'react';
import './App.css';
import StarRating from './components/StarRating/StarRating';

function App() {
  return (
    <div className="App">
        <div>learn react</div>
        <StarRating label={'test'}></StarRating>
        <StarRating label={'gugus'}></StarRating>
    </div>
  );
}

export default App;
