import React from "react";
import Carousel from '../Carousel';
import BentoGrid from '../BentoGrids';

function HomeSection() {
    return(
        <section className="homeSection">
            <div className="HeroSection">
                <BentoGrid />
            </div>
        </section>
    );
}

export default HomeSection;