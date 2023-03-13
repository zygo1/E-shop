import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import ProfileIcon from "./ProfileIcon";
import ProfileCategories from "./ProfileCategories";
import "./styles/Profile.css"

function Profile() {
    return (
        <>
            <Navbar />
            <ProfileIcon />
            <ProfileCategories />

        </>

    )
}

export default Profile;