import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function IndexPage() {

  const [places, setPlaces] = useState([]);

  useEffect(()=>{
    axios.get('/places').then(({data}) => {
      setPlaces([...data, ...data, ...data, ...data]);
    });
  }, []);

    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-x-8 gap-y-10 mt-8">
    {places.length > 0 && (
      places.map(place =>(
        <Link to={"place/"+place._id}>
          <div className="bg-gray-400 rounded-2xl">
          {place.photos[0] && <img src={"http://localhost:4000/uploads/"+ place.photos[0]} className="border rounded-2xl object-cover h-48 w-96"/>}
          </div>
          <h2 className="font-semibold leading-4 mt-2">{place.title}</h2>
          <h3 className="text-gray-500 leading-2">{place.address}</h3>
          <div className="flex gap-1 mt-1">
          <h2 className="font-bold text-pink-500 text-xl"> ₹{place.price} </h2> per night
          </div>
        </Link>
        
      ))
    )}
    
      </div>
    )
}