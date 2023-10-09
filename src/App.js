import { Fragment, useEffect, useState }          from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery                   from './Components/Gallery'
import SearchBar                 from './Components/SearchBar'
import AlbumView                 from './Components/AlbumView'
import ArtistView                from './Components/ArtistView'


function App(){
    //Purpose: Holds Search query Info
    let [search, setSearch]   = useState('');
    //Purpose: Holds a Message for the status of the search
    let [message, setMessage] = useState('Search for Music!');
    //Purpose: Holds the fetched data 
    let [data, setData]       = useState([]);
    const API_URL = 'https://itunes.apple.com/search?term=';
    //Purpose: on a search state change, try to find the data
    useEffect(() => {
      //prevents it from running if its an empty string
      if (search)
      {
        const fetchData = async () => {
          document.title = `${search} Music`;
          const response = await fetch((API_URL + search));
          const responseData = await response.json();
          //Now lets check if this was a valid search with results,if it is update data if not set a validity of search
          if (responseData.results.length > 0)
          {
            setData(responseData.results);
            setMessage('Artist Found!');
          }
          else
          {
            setMessage('Not Found');
            setData([]);
          }
        } 
        fetchData();
      }
    }, [search]);
    //Purpose: once the searchbar is submitting, change the search state
    const handleSearch = (event,term) => {
      //prevent page relaoading
      event.preventDefault();
      setSearch(term);
    };
    //Purpose: handles clearing the search submission
    const handleClear = () => {
      setSearch('');
      setData([]);
      setMessage('Search for Music!');
      //Note: in searchbar component, you also have to clear a state variable there
    }
    return (
        <div>
          <header>
            <h1>Welcome to our Song Searching App!</h1>
            <h3>Use the search bar below to search all of Itunes's Music</h3>
          </header>
          {message}
          <Router>
            <Routes>
              <Route path ="/" element = {
                <Fragment>
                  <SearchBar handleSearch = {handleSearch} handleClear = {handleClear}/>
                  <Gallery data={data} />
                </Fragment>
              }/>
              <Route path='/album/:id' element={<AlbumView/>}/>
              <Route path='/artist/:id' element={<ArtistView/>}/>
            </Routes>
          </Router>
        </div>
    )
}

export default App;