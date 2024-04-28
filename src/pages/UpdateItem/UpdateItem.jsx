import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { useLoaderData } from "react-router-dom";

export default function UpdateItem() {

    const loadedItem = useLoaderData()
    const { item_name, image, subcategory_name, price, rating, customization, processing_time, stockStatus, userEmail, userName, shortDescription } = loadedItem;



    const { user } = useContext(AuthContext)
    const id = loadedItem._id

    const handleSubmit = e => {

        e.preventDefault();
        const form = e.target;
        const item_name = form.elements['name'].value;
        const image = form.elements['photo'].value;
        const price = form.elements['price'].value;
        const rating = form.elements['rating'].value;
        const processing_time = form.elements['time'].value;
        const stockStatus = form.elements['stock'].value;
        const userEmail = form.elements['email'].value;
        const userName = form.elements['userName'].value;
        const shortDescription = form.elements['description'].value;
        const subcategory_name = form.elements['subcategory'].value;
        const customization = form.elements['customization'].value;

        const item = { id, item_name, image, subcategory_name, price, rating, customization, processing_time, stockStatus, userEmail, userName, shortDescription };
        console.log(item);

        fetch('http://localhost:5000/items', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    swal({
                        title: "Item Updated Successfully!",
                        icon: "success",
                        button: "OK!",
                    });
                }
            })
    };

    return (
        <div className="w-full bg-[#fff]">
            <Card className="w-11/12 md:w-[65%] mx-auto py-10 md:p-4 lg:p-20 space-y-6" color="transparent" shadow={false}>
                <Typography className="text-center" variant="h4" color="blue-gray">
                    Update Item
                </Typography>
                <Typography color="gray" className="mt-1 text-center font-normal">
                    Easily enhance your presence on ArtisanAura. Edit descriptions, images, and pricing to ensure your masterpiece shines. Keep your listings fresh and engaging, and let your creativity flourish!
                </Typography>
                <hr />
                <form onSubmit={handleSubmit} className="mt-8 mb-2 max-w-screen-lg">
                    <div className="space-y-6">
                        <div className="mb-1 flex flex-col md:flex-row gap-6">
                            <Input defaultValue={item_name} name="name" color="blue" label="Item Name" />
                            <Input defaultValue={image} name="photo" color="blue" label="Photo URL" />
                        </div>
                        <div className="mb-1 flex flex-col md:flex-row gap-6">
                            <Input defaultValue={price} type="text" name="price" color="blue" label="Price" />
                            <select defaultValue={subcategory_name} name="subcategory" className="border w-full border-gray-400 rounded-md p-1  bg-[#fff]">
                                <option value="">Select Subcategory</option>
                                <option value="Clay-made pottery">Clay-made pottery</option>
                                <option value="Stoneware">Stoneware</option>
                                <option value="Porcelain">Porcelain</option>
                                <option value="Terra Cotta">Terra Cotta</option>
                                <option value="Ceramics & Architectural">Ceramics & Architectural</option>
                                <option value="Home decor pottery">Home decor pottery</option>
                            </select>
                        </div>
                        <div className="mb-1 flex flex-col md:flex-row gap-6">
                            <Input defaultValue={rating} type="text" name="rating" color="blue" label="Rating" />
                            <select name="customization" className="border w-full border-gray-400 bg-[#fff] rounded-md p-1" defaultValue={customization}>
                                <option value="">Select Customization</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="mb-1 flex flex-col md:flex-row gap-6">
                            <Input defaultValue={processing_time} name="time" color="blue" label="Processing Time" />
                            <Input defaultValue={stockStatus} name="stock" color="blue" label="Stock Status" />
                        </div>
                        <div className="mb-1 flex flex-col md:flex-row gap-6">
                            <Input defaultValue={user?.email} name="email" color="blue" label="User Email" />
                            <Input defaultValue={user?.displayName} name="userName" color="blue" label="User Name" />
                        </div>
                        <Textarea defaultValue={shortDescription} name="description" color="blue" label="Short Description" />
                    </div>
                    <Button type="submit" className="mt-6" fullWidth>
                        Update Item
                    </Button>
                </form>
            </Card>
        </div>
    );
}
