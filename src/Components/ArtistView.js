//Import in all required Hooks
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState}           from 'react';

function ArtistView() {
    //Purpose: pulling in variable information from the URL path variable of the apple artist ID
    const { id } = useParams();
    //Purpose: holds all fetched, filtered album data about said artist as a state variable
    const [ artistData, setArtistData ] = useState([]);
    const navigate = useNavigate();
    //TODO move to own component
    const navButtons = () => {
        return(
            <div>
                <button onClick={() => navigate(-1)}> Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }
    //Purpose: fetch all information using our proxy server on every id change
    useEffect(() => {
        //Connecting to our proxy server backend application (to make them talk to each other, just listen where it is hosted)
        const API_URL = `http://localhost:4000/album/${id}`; //LINK repo:RR-Improve-A-Library-Interface
        const fetchData = async() =>
        {
            const response = await fetch(API_URL);
            const resData = await response.json();
            //Filter data to only include albums as the collection type
            const albums = resData.results.filter(item => item.collectionType === 'Album');
            setArtistData(albums);
        }
        fetchData();
    },[id]);
    //Purpose: COnfigure album display
    const albumDisplay = artistData.map(album => {
        return(
            <div>
                <Link to={`/album/${album.collectionId}`}>
                    <p key={album.collectionId}> {album.collectionName} </p>
                </Link>
            </div>
        )
    });
    return (
        <div>
            {navButtons()}
            <h2>The id passed was: {id}</h2>
            {albumDisplay}
        </div>
    )
}
export default ArtistView;