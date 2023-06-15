import React, { useState } from 'react';

const CitySearch = ({getAirQuality}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) =>{
        setInputValue(event.target.value)
    }

    const handleSearch = (event) => {
        event.preventDefault()
        const formattedCity = inputValue.replace(/ /g, '-')
        getAirQuality(formattedCity)
    }

    return (
        <form onSubmit={handleSearch}>
            <input type="text" placeholder="Enter City..." onChange={handleInputChange}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default CitySearch