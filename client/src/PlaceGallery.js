import { useState } from "react";

export default function PlaceGallery({place}) {
    const [showAll, setShowAll] = useState(false);

    if (showAll) {
        return (
        <div className="absolute bg-black mx-auto inset-0">
             <button onClick={()=> setShowAll(false)} className="flex gap-2 border rounded-2xl text-white shadow-black shadow px-2 py-1 ml-8 mt-4 hover:bg-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.0} stroke="currentColor" className="w-6 h-6 text-red-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
            Close
            </button>
            <h1 className="text-3xl text-white font-semibold text-center mt-4">Photos of {place.title}</h1>
           
            <div className="p-8 grid gap-8 bg-black">
            {place?.photos?.length > 0 && (
                place.photos.map(photo=>(
                    <div >
                        <img src={"http://localhost:4000/uploads/"+ photo} className="max-h-180 w-1/2 mx-auto rounded-2xl"/>
                    </div>
                ))
            )} 
            </div>
           
        </div>
        )
    }

    return (
        <div className="relative">
           <div className="grid grid-cols-[2fr_1fr] gap-2 mt-4 overflow-hidden max-h-96">
                <div className="max-h-96">
                    {place.photos?.[0] && (
                    <img onClick={()=> setShowAll(true)} className="object-cover cursor-pointer w-full border rounded-tl-2xl rounded-bl-2xl" src={"http://localhost:4000/uploads/"+ place.photos[0]}/>
                )}
                </div>
                <div className="grid gap-2">
                <div className="max-h-48 object-cover">
                {place.photos?.[1] && (
                    <img onClick={()=> setShowAll(true)} className="object-cover cursor-pointer w-full border rounded-tr-2xl rounded-br-2xl" src={"http://localhost:4000/uploads/"+ place.photos[1]}/>
                )}
                </div>
                <div className="max-h-48 object-cover">
                {place.photos?.[2] && (
                    <img onClick={()=> setShowAll(true)} className="object-cover cursor-pointer w-full border rounded-tr-2xl rounded-br-2xl" src={"http://localhost:4000/uploads/"+ place.photos[2]}/>
                )}
                </div>
                </div>
           </div>
           <button className="absolute bottom-0 right-2 bg-white border border-black px-2 py-1 rounded-2xl" onClick={()=> setShowAll(true)}>
                    Show more....
           </button>
           </div>
    )
}