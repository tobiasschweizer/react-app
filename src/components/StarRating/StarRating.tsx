import React, { useState } from 'react';
import './StarRating.css';

interface StarProps {
    label: string;
}

const StarRating = ({ label }: StarProps) => {
    const [count, setCount] = useState(0);

    return (
        <div className="StarRating">
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <div className="starring">Starring {label} {count}</div>
        </div>
    );
};

export default StarRating;
