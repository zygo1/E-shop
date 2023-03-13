import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import ProfileIcon from "./ProfileIcon";
import ProfileCategories from "./ProfileCategories";

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