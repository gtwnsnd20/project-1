import Navbar from "../Navbar";
import Posts from '../Posts';
import { useLocation } from 'react-router-dom'
import UserProfile from "../UserProfile";

function UserProfilePage(){
    return (
        <>
        <Navbar />
        <UserProfile/>
        </>
    )
}
export default UserProfilePage;