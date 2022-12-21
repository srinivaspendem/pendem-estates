import React, { useState } from "react";
//slic carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  //creating the ref
  const customSlider = React.useRef<Slider>(null);
  // setting slider configurations
  const [sliderSettings, setSliderSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  const heroContent = [
    {
      title: "Pendem Mega City",
      description:
        "Our first project with a great features like water tank, wide roads, and plantation",
      image: "/images/hero1.png"
    },
    {
      title: "Pendem Estates",
      description:
        "Our current project with infrastructural upcoming like BT roads, Power supply, Park and many more to come with the Engineering college opposite to the project.",
      image: "/images/hero2.png"
    },
    {
      title: "Upcoming Project",
      description: "Our most prestigious up coming project.",
      image: "/images/hero3.png"
    }
  ];

  return (
    <>
      <Slider {...sliderSettings} ref={customSlider}>
        {heroContent.map((data: any, index: number) => (
          <div key={index} className="relative z-0">
            <div className="absolute w-full h-full text-white z-10">
              <div className="container mx-auto px-5 mt-10">
                <div className="text-4xl sm:text-5xl font-medium">
                  {data.title}
                </div>
                <div className="text-lg leading-5 mt-2">{data.description}</div>
              </div>
            </div>
            <img
              src={data?.image}
              alt="image"
              className="mx-auto relative z-0 w-"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};
export default HeroCarousel;
