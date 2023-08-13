import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PlaceLocation from "../PlaceLocation";
import PlaceGallery from "../PlaceGallery";
import BookingInfo from "../BookingInfo";

export default function BookingPage() {
    const {id} = useParams();
    const [booking, setBooking] = useState(null);
    useEffect(()=>{
        axios.get("/bookings").then(({data})=>{
            const foundBooking = data.find(({_id})=>    _id === id)
            console.log(foundBooking);
            if (foundBooking) {
                setBooking(foundBooking);   
            }   
        })
    }, [])

    if(!booking){
        return '';
    }

    return (
        <div>
            <div>
            <h1 className="text-3xl font-semibold text-pink-500 font-serif">{booking.place.title}</h1>
           <PlaceLocation childern={booking.place.address}/>
           </div>
           <div className="mt-4 bg-gray-200 rounded-xl border p-4 shadow-md shadow-gray-500">
            <h2 className="text-xl px-4 font-bold font-serif">Your booking details: </h2>
            <BookingInfo booking={booking}/>
           </div>
           <PlaceGallery place={booking.place}/>
        </div>
    )
}