import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Rating } from "@mui/material";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { RxCross1, RxUpdate } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";
import '../../components/item.css'

const MyItem = () => {
    const loadedItems = useLoaderData()

    const { user } = useContext(AuthContext)
    const email = user.email;

    const myData = loadedItems.filter(item => item.userEmail === email)
    console.log(myData)


    return (
        <div className="w-11/12 md:w-[55%] gap-6 mx-auto">
            {
                myData.map(item => <div className="itemCard mt-8 p-6 border bg-[#f5f5f5] border-[#e0e0e0] rounded-md flex flex-col md:flex-row gap-4 items-center" key={item._id}>
                    <div className="relative w-[300px]">
                        <img className="h-60 object-cover rounded-md w-full object-bottom" src={item.image} alt="" />
                        <h1 className={`absolute top-1 right-1 px-2 py-1 ${item.stockStatus == 'In stock' ? 'bg-[#fd7e14]' : 'bg-cyan-600'} rounded-full text-white`}>{item.stockStatus}</h1>
                    </div>
                    <div className="flex w-full flex-col gap-4 items-center">
                        <h1 className="text-[#3498db] font-bold text-xl">{item.item_name}</h1>
                        <div className="flex gap-2 text-[#2c3e50]">
                            <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
                            {item.rating}
                        </div>
                        <h3 className="flex gap-2 items-center text-[#2c3e50]"><BsCurrencyDollar></BsCurrencyDollar>{item.price}</h3>
                        <h2 className="flex items-center gap-2 text-xl font-medium">Customization : <span>{item.customization == 'Yes' ? <FaCheck className="text-blue-900" /> : <RxCross1 className="text-red-600" />}</span></h2>

                        <hr />
                        <div className="flex flex-row lg:flex-row md:flex-col gap-4">
                            <div>
                                <Link to={`/updateItem/${item._id}`}>
                                    <button className="flex btn btn-block items-center gap-2 font-bold hover:bg-[#d66400] duration-300 bg-[#fd7e14] text-white">
                                        Update Item
                                        <RxUpdate className="text-xl " />
                                    </button>

                                </Link>
                            </div>
                            <div>
                                <button className="flex btn btn-block items-center gap-2 text-white hover:bg-[#d66400] duration-300 bg-[#fd7e14] font-bold">Delete Item<MdDeleteForever className="text-xl" /></button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyItem;