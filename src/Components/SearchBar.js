                
import { useState } from 'react';

function SearchBar(props) {
    //Purpose: Changes on input change
    let [searchTerm, setSearchTerm] = useState('');
    //Purpose: on typing into the input, change the searchTerm
    const handleChange = (event) => {
       setSearchTerm(event.target.value);
    };
    //Purpose: initiates data fetching
    const handleSubmit = (event) => {
        props.handleSearch(event, searchTerm)
    };
    //Purpose: Clears all search data
    const handleClear = (event) => {
        props.handleClear();
        //Also have to clear the state variable in the searchbar
        setSearchTerm('');
    };
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={searchTerm} placeholder="Enter a search term here" />
            <input type="submit"/>
        </form>
        <button onClick={handleClear}>Clear Search</button>
    </div>
    );
}

export default SearchBar;
    