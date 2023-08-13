import { useContext, useEffect, useState } from "react";
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext"

export default function BookingWidget({place}) {

    useEffect(()=>{
       const email1 = window.localStorage.getItem('email');
       setEmail(email1);
       const name1 = window.localStorage.getItem('name');
       setName(name1)
    }, []);

const [checkIn,setCheckIn] = useState("");
const [checkOut,setCheckOut] = useState("");
const [numberOfGuests,setNumberOfGuests] = useState(1);
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [redirect, setRedirect] = useState("");
const [email, setEmail] = useState("");

var numberOfDays = 0;
if (checkIn && checkOut) {
    numberOfDays = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
}


function bookNow() {
    if (email) {
        if (checkIn && checkOut && name && phone) {
            const bookingData = {checkIn: new Date(checkIn),
                checkOut: new Date(checkOut),
                numberOfGuests,
                phone,
                name,
               place: place._id,
               price: (numberOfDays*numberOfGuests*place.price)}
               
           axios.post("/bookings", bookingData).then((response)=>{
             const bookingId =  response.data._id;
             console.log("bookingId:   "+response.data);
             setRedirect("/account/bookings/"+bookingId);
           })
        }
        else{
            alert("Please choose the check-in and check-out dates.")
        }
    } else {
        alert("You must Login to book!");
        return <Navigate to={"/account"}/>
    }
}

if (redirect) {
    return <Navigate to={redirect}/>
}

    return (
        <div className="bg-white border rounded-2xl p-4">
        <div className="flex gap-2 text-2xl justify-center"> 

            <p className="text-xl">Price per night: <b className="text-2xl">₹  {place.price} /-</b> </p>
            
        </div>
        <div className="flex  justify-center">
        <div className="text-center">
                <div className=" border-gray-600 border-2 p-4 rounded-tl-xl mt-4">
                <label className="font-bold">Check In: </label>
                <input type="date" value={checkIn} onChange={(event)=>setCheckIn(event.target.value)}/>
                </div>
            </div> 
        
            <div className=" border-gray-600 border-2 p-4 rounded-tr-xl mt-4">
                <label className="font-bold">Check Out: </label>
                <input type="date" 
                value={checkOut} 
                onChange={(event)=>setCheckOut(event.target.value)}/>
            </div>
        </div>
        <div className="justify-center flex gap-2 border-2 border-gray-600 py-4 rounded-br-xl rounded-bl-xl mr-10 ml-10">
            <label className="font-bold">Number of Guests: </label>
            <input type="number" 
            value={numberOfGuests} 
            onChange={(event)=>setNumberOfGuests(event.target.value)} placeholder="1" 
            className="border border-gray-500 rounded-2xl text-center" min={1} max={10}/>
            </div>
            {numberOfDays > 0 && numberOfGuests && (
                <div className="justify-center">
                    <div className="mt-4 items-center ml-10">
                <label className="text-xl text-center">Total amount: <label className="font-bold text-2xl ml-4">₹    {numberOfDays * place.price * numberOfGuests} /-</label></label>
            </div>
            <div className="flex gap-4 mt-4 ml-10">
                <p className="text-md font-bold">Your full name:  </p>
                <input type="text" placeholder="name" 
                value={name} onChange={(event)=> setName(event.target.value)}
                className="border rounded-2xl border-gray-500 text-center"></input>
            </div>
            <div className="flex gap-4 mt-4 ml-10">
                <p className="text-md font-bold">Your phone number:  </p>
                <input type="text" placeholder="+91 " 
                value={phone} onChange={(event)=> setPhone(event.target.value)}
                className="border rounded-2xl border-gray-500 text-center"></input>
            </div>
           
                </div>
            )}
            
        <div className="mx-auto mt-4">
            <button onClick={bookNow} className="bg-pink-500 text-white font-bold px-4 py-2 text-xl mx-auto mt-2 rounded-3xl w-full">Book Now</button>
            
        </div>
    </div>
    )
}