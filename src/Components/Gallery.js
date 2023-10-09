import GalleryItem from './GalleryItem'


function Gallery(props){
    //Purpose: create HTML for every item
    const display = props.data.map((item,index) => {
        return (
            <GalleryItem item={item} key={index}/>
        )
    });

    return (
        <div>
            {display}
        </div>
    )
};

export default Gallery;