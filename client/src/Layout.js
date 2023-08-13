import { Outlet } from "react-router-dom";
import Header from "./pages/Header";

export default function Layout() {
    return(
        <div className="py-4 px-8">
            <Header />
            <Outlet />
        </div>
    )
}