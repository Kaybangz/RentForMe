import React from 'react';
import './EmptyList.css';

const EmptyList = () => {
  return (
    <h1 className='emptyList__header'>
        No house(s) available in this location yet...
    </h1>
  )
}

export default EmptyList