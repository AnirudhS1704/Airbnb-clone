export default function PlaceImages({place}) {
    if (!place.photos?.length) {
        return '';
    }
    return (
        
            <img className="object-cover rounded-tl-xl rounded-bl-xl w-48" src={'http://localhost:4000/uploads/'+place.photos[0]} alt=""/>
        
    )
}