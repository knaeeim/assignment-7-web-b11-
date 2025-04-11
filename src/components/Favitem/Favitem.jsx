import React from 'react';
import { RxCross1 } from "react-icons/rx";

const Favitem = ({item, handleCrossClick}) => {
    return (
        <div className='flex items-center justify-between gap-5 border-2 border-zinc-600 py-2 px-2 my-4 rounded-xl'>
            <div className='flex gap-4'>
                <img className='w-12 h-12 rounded-xl object-cover' src={item.image} alt="" />
                <div>
                    <h1 className='font-medium text-sm mb-3'>{item.title.length > 15 ? item.title.slice(0, 14) + "..." : item.title }</h1>
                    <div className='flex gap-4'>
                        <p className='font-medium text-xs'>${item.currentBidPrice}</p>
                        <p className='font-medium text-xs'>Bids : {item.bidsCount}</p>
                    </div>
                </div>
            </div>
            <button onClick={() => handleCrossClick(item)} className='btn btn-xs hover:btn-error'><RxCross1 /></button>
        </div>
    );
};

export default Favitem;