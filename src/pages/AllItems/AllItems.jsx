import { Link, useLoaderData } from "react-router-dom";

const AllItems = () => {

    const loadedItems = useLoaderData()
    console.log(loadedItems)
    return (
        <div className="w-11/12 md:w-4/5 mx-auto py-20 ">
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr>
                            <th></th>
                            <td>Item Name</td>
                            <td>Price</td>
                            <td>Stock Status</td>
                            <td>Rating</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loadedItems.map((item, idx) => <tr key={item._id}>
                                <th>{idx + 1}</th>
                                <td>{item.item_name}</td>
                                <td>{item.price}</td>
                                <td>{item.stockStatus}</td>
                                <td>{item.rating}</td>
                                <td><Link to={`/items/${item._id}`}><button className="btn btn-secondary">View Details</button></Link></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllItems;