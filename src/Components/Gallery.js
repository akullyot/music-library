import GalleryItem     from './GalleryItem';
import { DataContext } from '../DataContext';
import { useContext }  from 'react';

function Gallery(){
    //Pull in from the context
    const data = useContext(DataContext);
    //Purpose: create HTML for every item
    const display = data.map((item,index) => {
        return (
            <GalleryItem item={item} key={index}/>
        )
    });

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery;
