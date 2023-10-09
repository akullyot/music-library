import { useState } from 'react';

function GalleryItem(props){
    //Purpose: determines if a user is seeing detailed view or not 
    let [detailedview, setdetailedView] = useState(false);

    //CSS for this
    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${props.item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }
    

    //Purpose: HTML rendered if simple, view false
    const simpleView = () => {
        return(
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        );
    }
    //Purpose: HTML rendered if view true, complex
    const detailedView = () => {
        return(
            <div style={detailStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        );
    }

    const handleClick = () => {
        setdetailedView(!detailedview)
    };

    return (
        <div onClick={handleClick} style={{'display': 'inline-block'}}>
            {detailedview ? detailedView() : simpleView()}
        </div>
    )

}

export default GalleryItem;
