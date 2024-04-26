import { Rating } from "@mui/material";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useLoaderData } from "react-router-dom";

const ItemDetails = () => {
    const item = useLoaderData()
    const { item_name, image, subcategory_name, price, rating, customization, processing_time, stockStatus, userEmail, userName, shortDescription } = item;
    let isCustom;
    if (customization === 'Yes') {
        isCustom = true
    } else {
        isCustom = false
    }
    return (
        <div className="w-11/12 md:w-4/5 py-20 border px-6 items-center mx-auto flex flex-col lg:flex-row gap-10">
            <div className="flex-1 h-full">
                <img className=" h-full" src={image} alt="" />
            </div>
            <div className="space-y-6 flex-1">
                <h2 className="text-2xl font-bold text-[#3498db]">{item_name}</h2>
                <h3 className="flex gap-1 items-center text-xl text-[#2c3e50]"><BsCurrencyDollar></BsCurrencyDollar>{price}</h3>
                <div className="flex gap-2 text-[#2c3e50]">
                    <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                    {rating}
                </div>
                <p className="leading-7 text-[#717171]">{shortDescription}</p>

                <h4 className="text-xl font-medium">Available : <span className="text-red-500">{stockStatus}</span></h4>
                <h2 className="text-xl font-medium">Processing Time : <span className="text-[#717171]">{processing_time}</span></h2>
                <h2 className="flex items-center gap-2 text-xl font-medium">Customization : <span>{isCustom ? <FaCheck className="text-blue-900"/> : <RxCross1 className="text-red-600"/>}</span></h2>
                <hr />
                <h2 className="font-semibold uppercase text-cyan-500">Categories : <span className="text-[#717171]">{subcategory_name}</span></h2>
                <div className="space-y-4">
                    <h2 className="text-xl font-bold">Product Manager :</h2>
                    <h1 className="text-[#717171] font-medium">Name : {userName}</h1>
                    <h1 className="text-[#717171] font-medium">Email : {userEmail}</h1>
                </div>
            </div>

        </div>
    );
};

export default ItemDetails;