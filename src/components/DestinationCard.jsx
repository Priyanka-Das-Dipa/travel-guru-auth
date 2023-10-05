import React from "react";
import rating_img from '../../public/images/star_1_.png'

const DestinationCard = ({ destinations }) => {
  const { image, description, rating, price, title } = destinations;
  return (
    <div className="grid grid-cols-3 mt-10">
      <div className="col-span-2">
        <div className="card card-side bg-base-100 shadow-xl mb-5">
          <figure>
            <img className="w-96" src={image} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="flex">
                <p className="flex gap-2"><img className="text-xs" src={rating_img} alt="" /> {rating}</p>
            <p className="text-xl font-medium">${price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default DestinationCard;
