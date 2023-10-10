//Import in all required Hooks
import { useParams}             from 'react-router-dom';
import { useEffect, useState }  from 'react';

function AlbumView() {
    //Purpose: pulling in variable information from the URL path variable of the apple album ID
    const { id } = useParams();
    //Purpose: holds all fetched, filtered album data about said artist as a state variable
    const [ albumData, setAlbumData ] = useState([]);
    //Purpose: fetch all information using our proxy server on every id change
    useEffect(() => {
        //Connecting to our proxy server backend application (to make them talk to each other, just listen where it is hosted)
        const API_URL = `http://localhost:4000/song/${id}`; //LINK repo:RR-Improve-A-Library-Interface
        const fetchData = async() =>
        {
            const response = await fetch(API_URL);
            const resData = await response.json();
            //Filter data to only include tracjs as the collection type
            const tracks = resData.results.filter(item => item.wrapperType === 'track');
            setAlbumData(tracks);
        }
        fetchData();
    },[id]);
    //Purpose: Configure album display
    const artistDisplay = albumData.map(track => {
        return(
            <div key={track.trackId}>
                    <p> {track.trackName} </p>
            </div>
        )
    });
    return (
        <div>
            <h2>The id passed was: {id}</h2>
            {artistDisplay}
        </div>
    )
}
export default AlbumView;