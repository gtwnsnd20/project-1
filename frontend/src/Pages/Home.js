import Navbar from "../components/Navbar";
import ForumTabsDemo from "../components/TabForums";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <ForumTabsDemo />
            </main>
            <Footer />
        </>
    );
}
export default Home;