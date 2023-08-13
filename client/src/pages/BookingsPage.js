import axios from "axios"
import { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import PlaceImages from "../PlaceImages";
import { differenceInCalendarDays, format } from "date-fns";
import { Link } from "react-router-dom";
import BookingInfo from "../BookingInfo";

export default function BookingsPage() {
    const [bookings, setBookings] = useState([]);
    useEffect(()=>{
        axios.get("/bookings").then(({data})=>{
            console.log(data);
            setBookings(data);
            console.log(bookings);
        })
    }, [])
    return (
        <div>
        <AccountNav />
        {bookings.length>0 && bookings.map((booking)=>(
        <Link to={"/account/bookings/"+booking._id}>
            <div className="flex bg-gray-200 rounded-2xl overflow-hidden m-8">
                <div className="w-48">
                <PlaceImages place={booking.place}/>
            </div>
            <BookingInfo booking={booking}/>
            </div>
        </Link>
        ))}
        </div>
    )
}