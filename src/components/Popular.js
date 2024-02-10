import React from "react";
import { products } from "../data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./../main.css";
import Heading from "../common/Heading";

const NextArrow = (props) => (
  <div {...props} className="slick-arrow next-arrow">
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const PrevArrow = (props) => (
  <div {...props} className="slick-arrow prev-arrow">
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

const Popular = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-16 overflow-hidden text-center relative ">
      <Heading
        title="top Populars"
        description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY"
      />
      <div className="columns-2 h-full bg-gray-100">
        <div className="columns-1">
          <div className="p-6">
            <Slider {...settings}>
              {products.slice(7, 10).map((item, index) => (
                <div key={index} className="mx-auto max-w-xs relative h-full">
                  <div className="p-1 hover:bg-gray-200 hover:shadow transition-all duration-300 relative group h-full">
                    <img
                      src={item.img}
                      title={item.category}
                      alt={item.category}
                      className="mx-auto h-full w-full object-cover"
                    />
                    <div className="icons absolute top-0 right-0 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex flex-wrap flex-col  p-2 mr-1 mt-1">
                        <FontAwesomeIcon
                          className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white"
                          title="add to cart"
                          icon="heart"
                        />
                        <FontAwesomeIcon
                          className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white"
                          title="add to cart"
                          icon="balance-scale"
                        />
                        <FontAwesomeIcon
                          className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white"
                          title="add to cart"
                          icon="eye"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold uppercase">{item.name}</div>
                    <div>${item.price}</div>
                  </div>
                  <div className="mt-5">
                    <button
                      type="button"
                      className="bg-black text-white p-4 hover:bg-red-600 uppercase font-bold"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="columns-1 h-full">
          <div className="h-full">
            <img
              src="./img/banners/id1-img1.jpg"
              title="title"
              alt="banners"
              className="bg-cover hover:shadow-slate-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
