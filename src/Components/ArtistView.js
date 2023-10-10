//Import in all required Hooks
import { useParams }            from 'react-router-dom';
import { useEffect, useState }  from 'react';

function ArtistView() {
    //Purpose: pulling in variable information from the URL path variable of the apple artist ID
    const { id } = useParams();
    //Purpose: holds all fetched data about said artist as a state variable
    const [ artistData, setArtistData ] = useState([]);
    //Purpose: fetch all information
    //useEffect(() => {},[]);

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}
export default ArtistView;