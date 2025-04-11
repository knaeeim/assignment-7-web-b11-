import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { FaRegHeart } from "react-icons/fa";
import Favitem from '../Favitem/Favitem';
import { toast } from 'react-toastify';

const ActiveAuction = () => {

    const [data, setData] = useState([]);
    const [favItems, setFavItems] = useState([]);
    const [totalAmount, setAmount] = useState(0);
    const [disabledMap, setDisabledMap] = useState({});

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch('data.json');
            const result = await response.json();
            setData(result);
        }
        fetchData();
    }, [])

    const handleFavouriteItems = (item) => {
        setFavItems(prev => [...prev, item])
        setAmount(prev => prev + item.currentBidPrice);
        setDisabledMap(prev => ({...prev, [item.id]: true}))
        toast.success(`${item.title} added to favourite successfully`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: {
                fontSize: "20px",
                width: "450px",
            }
        });
    }

    const handleCrossClick = (item) => {
        const updateFavItems = favItems.filter(favItem => favItem.id !== item.id);
        setFavItems(updateFavItems);
        setAmount(prev => prev - item.currentBidPrice);
        setDisabledMap(prev => ({...prev, [item.id]: false}));
        toast.error(`${item.title} removed from favourite successfully`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: {
                fontSize: "20px",
                width: "450px",
            }
        });
    }
    

    return (
        <div className='md:px-10 px-5 py-20 w-full bg-gray-200'>
            <div className='mb-10 md:ml-24 text-center md:text-left'>
                <h1 className='text-2xl font-bold mb-3'>Active Auctions</h1>
                <p className='text-lg font-bold'>Discover and bid on extraordinary items</p>
            </div>

            <div className='flex flex-col md:flex-row gap-10 w-full h-full justify-center overflow-y-auto'>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-200 md:w-[60%] w-full">
                    <table className="table">
                        {/* head */}
                        <thead className='text-center'>
                            <tr>
                                <th>Items</th>
                                <th>Current Bid</th>
                                <th>Time Left</th>
                                <th>Bid Now</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {data.map(item => <Product key={item.id} item={item} handleFavouriteItems={handleFavouriteItems} disabled={disabledMap[item.id]}></Product>)}
                        </tbody>
                    </table>
                </div>

                <div className={`md:w-[25%] w-full bg-base-200 rounded-xl h-fit`}>
                    <div className='flex items-center gap-4 text-xl justify-center border-b-2 border-zinc-300 py-5'>
                        <FaRegHeart />
                        <h1>Favourite items</h1>
                    </div>

                    <div className='py-5 px-5'>
                        {favItems.length > 0 ? (
                            favItems.map(item => <Favitem key={item.id} item={item} handleCrossClick={handleCrossClick}></Favitem>)
                        ) 
                        : 
                        (<div>
                            <h1 className='md:text-2xl text-lg font-bold text-center'>No Favourite Yet</h1>
                            <p className='text-center font-semibold mt-5'>Click the heart icon on any item to add it to your Favourite</p>
                        </div>)}
                    </div>

                    {/* total amount div */}
                    <div className='border-t-2 border-zinc-300 py-5'>
                        <p className='md:text-xl text-md font-semibold text-center'>Total Bids Amount : ${totalAmount ? Math.abs(totalAmount).toFixed(2) : "00.00" } </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActiveAuction;