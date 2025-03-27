import React, { useState } from "react";

const NumberInput = ({ min, max, onValueChange }) => {
  const [value, setValue] = useState(max - 1);

  const handleChange = (e) => {
    let newValue = parseInt(e.target.value, 10);
    
    if (isNaN(newValue)) newValue = min; // Default to min if invalid
    else if (newValue < min) newValue = min; // Enforce minimum
    else if (newValue > max) newValue = max; // Enforce maximum

    setValue(newValue);
    onValueChange(newValue); // Pass value to parent
  };

  return (
    <input className="tomorrow-regular text-primary mb-2" type="number" value={value} onChange={handleChange} min={min} max={max} style={{ padding: "10px", fontSize: "32px", width: "150px", border: "1px solid #ccc", borderRadius: "5px", textAlign: "center", }}/>
  );
};

export default NumberInput;
