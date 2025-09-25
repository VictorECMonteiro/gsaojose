import React from "react";

import Slider from "react-slick";// no seu App.tsx ou main.tsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Carrossel({ children }: { children: React.ReactNode }) {
    var settings = {
        className: "slider variable-width",
        // dots: true,
        infinite: true,
        speed: 500,
        variableWidth: true,
        centerMode: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
    };
    return (
        <div  className="slider-container" style={{ overflow: 'hidden' }}>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )

}
