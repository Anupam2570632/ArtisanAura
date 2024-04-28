import { Rating } from "@mui/material";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";


const CategoryCollection = () => {
    const items = useLoaderData()
    console.log(items)

    return (
        <div className="space-y-6 text-center py-16 md:py-32">
            <div className="w-11/12 md:w-[80%] mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {
                    items.map(item => <div className="itemCard mt-8 p-6 border  border-[#e0e0e0] rounded-md flex flex-col gap-4 items-center" key={item._id}>
                        <img className="h-60 object-cover rounded-sm w-full object-bottom" src={item.image} alt="" />
                        <div className="flex w-full flex-col gap-4 items-center">
                            <h1 className="text-[#3498db] font-bold text-xl">{item.item_name}</h1>
                            <h2 className="text-[#34495e] font-semibold ">{item.subcategory_name}</h2>
                            <div className="flex gap-2 text-[#2c3e50]">
                                <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
                                {item.rating}
                            </div>
                            <h3 className="flex gap-2 items-center text-[#2c3e50]"><BsCurrencyDollar></BsCurrencyDollar>{item.price}</h3>
                            <hr />
                            <div className="w-full">
                                <Link to={`/items/${item._id}`}>
                                    <button className="py-2 rounded-md text-white font-bold hover:bg-[#d66400] duration-300 w-full bg-[#fd7e14]">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CategoryCollection;