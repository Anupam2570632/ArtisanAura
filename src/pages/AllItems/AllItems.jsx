import { BsCurrencyDollar } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const AllItems = () => {

    const loadedItems = useLoaderData()
    console.log(loadedItems)
    return (
        <div className="w-11/12 md:w-4/5 mx-auto py-20">
            <div className="overflow-x-auto">
                <table className="table table-auto border-collapse border border-gray-400 shadow-md">
                    <thead>
                        <tr className="bg-gray-200">
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
                                <tr key={item._id} className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                    <td className="border px-4 py-2">{idx + 1}</td>
                                    <td className="border px-4 py-2">{item.item_name}</td>
                                    <td className="border px-4 py-2 flex items-center">{item.price} <BsCurrencyDollar></BsCurrencyDollar></td>
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
