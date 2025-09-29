import React from "react";
import Slider from "react-slick";

// Styles required for slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carrossel({ children }: { children: React.ReactNode }) {
    const settings = {
        className: "slider variable-width",
        infinite: true,
        speed: 500,
        variableWidth: true,
        centerMode: true,

        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    // centerMode: true,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    // centerMode: true,
                    variableWidth: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    // centerMode: true,
                    variableWidth: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, // covers 412px and other mid-size phones
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false, // optional
                    dots: true,    // optional
                }
            },
            {
                breakpoint: 375, // covers 412px and other mid-size phones
                settings: {
                    // centerMode: false,
                    // variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false, // optional
                    dots: true,    // optional
                }
            }
        ]

    };

    return (
        <div className="slider-container" style={{ overflow: "hidden" }}>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}
