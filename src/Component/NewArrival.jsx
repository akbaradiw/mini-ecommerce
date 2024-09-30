import React, { useEffect } from "react";
import { NewProduct } from "../Data/NewProduct";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewArrival = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div style={{ backgroundColor: "#d5ffc2 " }} className="py-2 px-2 w-full" >
      <h1 className="lg:text-3xl text-xl pb-4 text-center font-bold text-green-800">New Arrival</h1>
      <Slider {...settings}>
        {NewProduct.map((product) => (
          <div data-aos="fade-up" data-aos-duration="2000" key={product.id}>
            <div className="px-2">
              <img
                className="object-center   hover:object-scale-down object-cover h-60 w-80 rounded-md"
                alt={product.name}
                src={product.image}
                width={300}
                height={300}
              />
            </div>
            <div className=" mx-16 py-2 lg:py-0 lg:mx-0   text-center">
              <h1 className="lg:py-2 text-green-800 font-semibold ">
                {product.name}
              </h1>
              <p className="text-fuchsia-500 mb-1 font-semibold">
                $ {product.price}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrival;
