import { differenceInCalendarDays, format } from "date-fns";

export default function BookingInfo({booking}) {
    return (
        <div className="py-2 px-4 grow">
                <div className="grid justify-between grid-cols-2">
                <div>
                <div className="flex gap-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

                <i className="font-bold font-serif">{format(new Date(booking.checkIn), 'dd-MM-yyyy')}</i>
                <p className="">to</p> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

                <i className="font-bold font-serif">{format(new Date(booking.checkOut), 'dd-MM-yyyy')}</i>
                </div>
                <div className="flex gap-4 items-center mt-1">
                <i className="font-bold font-serif">{differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn)) }</i>
                days        
                <i className="font-bold text-2xl">|</i>         
                <i className="font-bold font-serif">{booking.price/ (booking.place.price * differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn)))}</i>
                guests
                </div>
                <div className=" flex gap-4 mt-1">
                    <p className="font-bold font-serif">Name: </p>
                    <p className="font-serif">{booking.name}</p>
                </div>
                <div className=" flex gap-4 mt-1">
                    <p className="font-bold font-serif">Phone: </p>
                    <p className="font-serif">{booking.phone}</p>
                </div>
                
                </div>
                <div>
                <div className="flex gap-4">
                    <h2 className="text-2xl font-bold font-serif">Total Price:</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
 <div className="text-pink-500 text-3xl font-serif font-extrabold">{booking.price}</div>
 </div>
                </div>
                </div>
            </div>
    )
}