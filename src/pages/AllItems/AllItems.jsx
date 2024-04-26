import { useLoaderData } from "react-router-dom";

const AllItems = () => {

    const loadedItems = useLoaderData()
    console.log(loadedItems)
    return (
        <div>
           <h2>Items: {loadedItems.length}</h2>
           {
            loadedItems.map(item=><div key={item._id}>
                <img src={item.image} alt="" />
            </div>)
           }
        </div>
    );
};

export default AllItems;