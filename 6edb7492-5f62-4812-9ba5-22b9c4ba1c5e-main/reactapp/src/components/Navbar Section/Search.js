import React, { useState } from 'react';
import './style.css';

const Search = () => {

    const [showInput, setShowInput] = useState(false);

    const handleMouseEnter = () => {
      setShowInput(true);
    };
  
    const handleMouseLeave = () => {
      setShowInput(false);
    };
  
    return (
      <div >
      </div>
    );
  };
  
export default Search
