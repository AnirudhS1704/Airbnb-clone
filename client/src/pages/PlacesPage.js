import { Link} from "react-router-dom";
import AccountNav from "../AccountNav"
import axios from "axios";
import { useEffect, useState } from "react";
import PlaceImages from "../PlaceImages";

export default function PlacesPage(){

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get('/user-places').then(({data}) => {
          setPlaces(data);
        });
      }, []);

    return <div>
        <AccountNav/>
        <div className="text-center">
      
            <Link className="inline-flex gap-2 text-center text-white bg-pink-500 font-bold py-2 px-6 border rounded-3xl" to={"/account/places/new"}>
            Add a place
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            </Link>
            
        </div>
    <div>
        {places.length > 0 && places.map(place=>(
            <Link to={'/account/places/'+place._id} className="bg-gray-200 border rounded-2xl flex gap-4 cursor-pointer mt-8 mb-4 mx-8">
                <div className="w-48 bg-gray-500 grow shrink-0 flex rounded-xl object-cover">
                    <PlaceImages place={place}/>
                </div>
                <div className="grow-0 shrink">
                    <h2 className="text-xl font-bold text-pink-500 font-serif mt-2">{place.title}</h2>
                    <p className="text-sm mb-2 font-serif">{place.description}</p>
                </div>
            </Link>
        ))}
    </div>
        </div>
             
}