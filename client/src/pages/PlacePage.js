import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import PlaceLocation from "../PlaceLocation";
import { pl } from "date-fns/locale";

export default function PlacePage() {
    const {id} = useParams();
    const [place, setPlace] = useState([]);


    useEffect(()=>{
        if (!id) {
            return;
        }
        axios.get("/place/"+id).then((response)=>{
            setPlace(response.data);
        })
    }, [id])
    console.log(id);

    return (
        <div className="bg-gray-200 rounded-2xl">
           <div className="mx-4 my-4 p-2">
           <div>
            <h1 className="text-3xl font-semibold text-pink-500 font-serif">{place.title}</h1>
           <PlaceLocation childern={place.address}/>

           </div>
           <PlaceGallery place={place}/>
           <div className="my-4">
            <h2 className="text-xl font-bold text-pink-500 font-serif">Description</h2>
            <p>{place.description}</p>
           </div>

           <div className="grid lg:grid-cols-2 sm:grid-cols-1"> 
                    <div>
                    <div className="flex gap-2 mt-2">
                    <b> Check-In: </b>
                    <p>{place.checkIn}</p>
                    </div>
                    <div className="flex gap-2 mt-2">
                    <b> Check-Out: </b>
                    <p>{place.checkOut}</p>
                    </div>
                    <div className="flex gap-2 mt-2">
                    <b> Maximum number of guests:  </b>
                    <p>{place.maxGuests}</p>
                    </div>
                    <div className="mt-4">
                        <label className="font-bold text-pink-500 font-serif">Extra Information</label>
                        <p className="text-gray-800 leading-2">{place.extraInfo}</p>
                    </div>
                    </div>

                   <BookingWidget place={place}/>
           </div>
           </div>
        </div>
    )
}