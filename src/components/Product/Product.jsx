import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";


const Product = ({ item, handleFavouriteItems, disabled }) => {

    const handleClick = () => {
        handleFavouriteItems(item);
    }
  return (
        <tr>
            <td>
                <div className="flex items-center md:gap-4 gap-1">
                    <img className="md:w-16 md:h-16 w-10 h-10 rounded-xl object-cover" src={item.image} alt="" /> 
                    <span className="md:text-sm text-xs md:font-bold">{item.title}</span>
                </div>
            </td>
            <td className="text-xs">${item.currentBidPrice}</td>
            <td className="text-xs">{item.timeLeft} left</td>
            <td><button className={`${disabled ? 'cursor-not-allowed' : "cursor-pointer"} `} onClick={handleClick} disabled={disabled}>{ disabled ? <FaHeart className="text-red-500" md:size={25} size={20}/> : <FaRegHeart md:size={25} size={20}/>}</button></td>
        </tr>
  );
};

export default Product;
