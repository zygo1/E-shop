import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles/Profile.css"
import CircleProfile from "./CircleProfile";

function Profile() {
    return (
        <>
            <Navbar />
            <CircleProfile />
        </>

    )
}

export default Profile;