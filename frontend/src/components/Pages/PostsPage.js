import Navbar from "../Navbar";
import Posts from '../Posts';
import { useLocation } from 'react-router-dom'
function PostsPage(){
    //props.location.state
    const location = useLocation();
    return (
        <>
        <Navbar />
        <Posts {...location.state}/>
        </>
    )
}
export default PostsPage;