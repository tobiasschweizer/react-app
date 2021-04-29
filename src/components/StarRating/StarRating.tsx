import React from 'react';
import './StarRating.css';

interface StarProps {
    label: string;
}

function StarRating(props: StarProps) {
    return <div className="StarRating">Starring {props.label}</div>;
}

export default StarRating;
