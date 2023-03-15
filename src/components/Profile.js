import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import ProfileIcon from "./ProfileIcon";
import ProfileCategories from "./ProfileCategories";
import "./styles/Profile.css"
import CircleProfile from "./CircleProfile";

function Profile() {
    return (
        <>
            <CircleProfile />
            {/* <Navbar />
            <ProfileIcon />
            <ProfileCategories /> */}
        </>

    )
}

export default Profile;