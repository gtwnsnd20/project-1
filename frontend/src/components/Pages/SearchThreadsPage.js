import Navbar from "../Navbar";
import SearchResults from "../SearchThreadsResults"
import { useLocation } from 'react-router-dom'
function PostsPage(){
    //props.location.state
    const location = useLocation();
    return (
        <>
        <Navbar />
        <SearchResults {...location.state}/>
        </>
    )
}
export default PostsPage;