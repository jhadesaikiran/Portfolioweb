import React from "react";
import "../../App.css"
import Aboutus from "../Homepagecomponent/Aboutus"
import Cards from "../Homepagecomponent/Cards";
import Footer from "../Footer";
import Mainsection from "../Homepagecomponent/Mainsection"
import Stats from "../Homepagecomponent/Stats";
import Testimonials from "../Homepagecomponent/Testimonials";


function Home() {
    return(
        <>
        <Mainsection/>
        <Aboutus/>
<Cards/>

<Stats/>


<Footer/>

        </>
    )
}

export default Home;