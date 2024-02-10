import { products } from "../data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../common/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Category = () => {
  var settings = {
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
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [menuItem, setMenuItem] = useState(products);
  const filterItems = (name) => {
    const newItems = products.filter((item) => item.name === name);
    setMenuItem(newItems);

    // for all data show
    if (name === "all") {
      setMenuItem(products);
      return;
    }
  };

  return (
    <div className="bg-white mt-16 text-center">
      <Heading
        title="Best Seller"
        description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY"
      />
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-gray-200 pt-2 pb-2 pl-4 pr-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("all")}
        >
          All
        </button>
        <button
          type="button"
          className="bg-gray-200 pt-2 pb-2 pl-4 pr-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("DECOR")}
        >
          DECOR
        </button>
        <button
          type="button"
          className="bg-gray-200 pt-2 pb-2 pl-4 pr-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("KITCHEN")}
        >
          KITCHEN
        </button>
        <button
          type="button"
          className="bg-gray-200 pt-2 pb-2 pl-4 pr-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("LIVING ROOM")}
        >
          LIVING ROOM
        </button>
        <button
          type="button"
          className="bg-gray-200 pt-2 pb-2 pl-4 pr-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("SOFA")}
        >
          SOFA
        </button>
      </div>
      <div
        className=" m-10 overflow-hidden text-center relative grid grid-cols-4 flex-wrap"
        {...settings}
      >
        {menuItem.map((item, index) => (
          <div key={index} className="relative">
            <div className="m-4 relative group">
              <img
                src={item.img}
                title={item.name}
                alt={item.name}
                className="mx-auto h-full w-full hover:shadow-md transition-all duration-300 bg-cover"
              />
              <div className="icons absolute top-0 right-0 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex flex-wrap flex-col  p-2 mr-1 mt-1">
                  <FontAwesomeIcon
                    className="p-2 mb-1 bg-white hover:bg-red-500 hover:text-white"
                    title="add to cart"
                    icon="shopping-cart"
                  />
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
              <div className="mt-4">
                <div className="font-semibold uppercase">{item.name}</div>
                <div className="font-semibold uppercase">{item.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
