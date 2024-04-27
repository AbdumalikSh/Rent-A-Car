import BrandSlider from "../../components/BrandSlider/BrandSlider"
import Footer from "../../components/Footer/Footer"
import HomeMain from "../../components/HomeMain/HomeMain"
import Nav from "../../components/NavBar/Nav"
import Services from "../../components/Services/Services"

const Home = () => {
    const navBackgroundColor = "#808080";
    return (
        <>
            <div>
                <Nav backgroundColor = {navBackgroundColor} />
                <HomeMain />
                <Services />
                <BrandSlider />
                <Footer />
            </div>
        </>
    )
}

export default Home