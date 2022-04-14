import Navbar from "../Navbar";
import Categories from "../Categories"
import Footer from "../Footer";


function Home() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Categories />
            </main>
            <Footer />
        </>
    );
}
export default Home;