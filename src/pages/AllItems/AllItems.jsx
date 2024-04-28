import { Typography } from "@material-tailwind/react";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const AllItems = () => {

    const loadedItems = useLoaderData()
    console.log(loadedItems)
    return (
        <div className="w-11/12 md:w-4/5 mx-auto py-10 md:py-20 space-y-6">
            <Typography className="text-center" variant="h4" color="blue-gray">
                Discover Artisan Treasures
            </Typography>
            <Typography color="gray" className="mt-1 font-normal max-w-[750px] mx-auto text-center">
                Explore unique stories and talents in our curated art and craft collection. Find the perfect gift or add to your own with hidden gems from artisans worldwide.            </Typography>
            <div className="overflow-x-auto">
                <table className="table table-auto border-collapse border border-gray-400 shadow-md">
                    <thead>
                        <tr className="">
                            <th className="px-4 py-4 text-[18px] "></th>
                            <th className="px-4 py-4 text-[18px] ">Item Name</th>
                            <th className="px-4 py-4 text-[18px] ">Price</th>
                            <th className="px-4 py-4 text-[18px] ">Stock Status</th>
                            <th className="px-4 py-4 text-[18px] ">Rating</th>
                            <th className="px-4 py-4 text-[18px] ">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loadedItems.map((item, idx) => (
                                <tr key={item._id} >
                                    <td className="border px-4 py-2">{idx + 1}</td>
                                    <td className="border px-4 py-2">{item.item_name}</td>
                                    <td className="border px-4 py-2"><p className=" flex items-center">{item.price} <BsCurrencyDollar></BsCurrencyDollar></p></td>
                                    <td className="border px-4 py-2">{item.stockStatus}</td>
                                    <td className="border px-4 py-2">{item.rating}</td>
                                    <td className="border px-4 py-2 text-center">
                                        <Link to={`/items/${item._id}`}>
                                            <button className="btn btn-secondary">View Details</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllItems;
