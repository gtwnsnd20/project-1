import Navbar from "../components/Navbar";
import Posts from '../components/Posts';
import LoginIntegration from "../components/LoginIntergration"
import { useLocation } from 'react-router-dom'
function LoginPage(){
    return (
        <>
        <Navbar />
        <LoginIntegration/>
        </>
    )
}
export default LoginPage;