import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import PhotosUploader from "../PhotosUploader";
import Perks from "../Perks";

export default function PlacesFormPage() {

    var id = useParams();
    id = JSON.stringify(id);

    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [addPhotos, setAddPhotos] = useState([]);
    const [description, setDescription] = useState("");
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [maxGuests, setMaxGuests] = useState(2);
    const [price, setPrice] = useState("1000");
    const [redirect, setRedirect] = useState(false);

    useEffect(()=>{
        if (!id ) {
            return;
        }
            axios.get('/places/'+id).then(response=>{
            const {data} = response;
            setTitle(data.title);
            setAddress(data.address);
            setAddPhotos(data.photos);
            setDescription(data.description);
            setPerks(data.perks);
            setExtraInfo(data.extraInfo);
            setCheckIn(data.checkIn);
            setCheckOut(data.checkOut);
            setMaxGuests(data.maxGuests);
            setPrice(data.price);
            
        }
        );
        
    }, [id])

    function savePlace(event) {
        event.preventDefault();

        if (id && id !== "{}") {
            //update
            console.log(id);
            axios.put("/places", {
            id: id,
            title: title, 
            address: address,
            addPhotos: addPhotos,
            description: description,
            perks: perks,
            extraInfo: extraInfo, 
            checkIn: checkIn, 
            checkOut: checkOut, 
            maxGuests: maxGuests,
            price: price,
        },
        ).then(function (response) {  
            setRedirect(true);
            console.log(id);
        console.log(response.data);
      }); 
        } else {
            //new place
            axios.post("/save-places", {
            title: title, 
            address: address,
            addPhotos: addPhotos,
            description: description,
            perks: perks,
            extraInfo: extraInfo, 
            checkIn: checkIn, 
            checkOut: checkOut, 
            maxGuests: maxGuests,
            price: price,
        },
        ).then(function (response) {  
            setRedirect(true);
        console.log(response.data);
      }); 
        }}

    if (redirect) {
        return <Navigate to={'/account/places'} />
      }
    

    return (
        <>
             <div>
    
                    <form className="mx-4 my-2" onSubmit={savePlace}>
                        <h2 className="text-2xl mt-2">Title</h2>
                        <p className="text-gray-400 text-sm">Title should be short and attractive</p>
                        <input placeholder="Title of your property" type="text" className="border rounded-xl w-full py-1 px-2" value={title} onChange={event =>setTitle(event.target.value)}/>
                        <h2 className="text-2xl mt-2">Address</h2>
                        <input placeholder="Address of your property" type="text" className="border rounded-xl w-full py-1 px-2" value={address} onChange={event =>setAddress(event.target.value)}/>
                        <h2 className="text-2xl mt-2">Photos</h2>
                        <PhotosUploader addPhotos={addPhotos} onChange={setAddPhotos}/>
                        <h2 className="text-2xl mt-2">Description</h2>
                        <textarea placeholder="Describe your place in a few words" className="border rounded-xl w-full py-1 px-2 col" rows="5" value={description} onChange={event =>setDescription(event.target.value)}/>

                        <h2 className="text-2xl mt-2">Perks</h2>
                        <p className="text-gray-400 text-sm">Select the perks of your place</p>
                        <Perks selected={perks} onChange={setPerks}/>
                        
                        <h2 className="text-2xl mt-2">Extra info(if any)</h2>
                        <textarea placeholder="Accomodation rules, etc" className="border rounded-xl w-full py-1 px-2 col" rows="3" value={extraInfo} onChange={event =>setExtraInfo(event.target.value)}/>
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                            <div>
                                <h2 className="text-2xl mt-2">Check-In time</h2>
                                <input placeholder="12:00 PM" type="text" className="border rounded-xl  py-1 px-2" value={checkIn} onChange={event =>setCheckIn(event.target.value)}/>
                            </div>
                            <div>
                                <h2 className="text-2xl mt-2">Check-Out time</h2>
                                <input placeholder="5:00 PM" type="text" className="border rounded-xl py-1 px-2" value={checkOut} onChange={event =>setCheckOut(event.target.value)}/>
                            </div>
                            <div>
                                <h2 className="text-2xl mt-2">Maiximum Guests</h2>
                                <input placeholder="2" type="number" className="border rounded-xl py-1 px-2" value={maxGuests} onChange={event =>setMaxGuests(event.target.value)}/>
                            </div>
                            <div>
                                <h2 className="text-2xl mt-2">Price</h2>
                                <p className="text-gray-400 text-sm">Price per night in INR</p>
                                <input placeholder="₹ 1000" type="text" className="border rounded-xl py-1 px-2" value={price} onChange={event =>setPrice(event.target.value)}/>
                            </div>

                        </div>
                        <p className="text-sm text-blue-600">Note: There should sufficient time between check-out and next check-in to ensure proper cleaning.</p>
                        <button type="submit" className='bg-pink-600 p-1 w-full text-white font-semibold border rounded-3xl text-xl mt-4 mx-4 mb-8' >Save</button>
                        
                        
                    </form>
    </div>
        </>
    )}
