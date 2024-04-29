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

export function AddItem() {

    const { user } = useContext(AuthContext)

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

        const item = { item_name, image, subcategory_name, price, rating, customization, processing_time, stockStatus, userEmail, userName, shortDescription };
        console.log(item);

        fetch('https://artisan-aura-server.vercel.app/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    swal({
                        title: "Item Added Successfully!",
                        icon: "success",
                        button: "OK!",
                    });
                    form.reset()
                }
            })
    };

    return (
        <div className="w-full">
            <Card className="w-11/12 md:w-[65%] max-w-[1500px] mx-auto py-10 md:p-4 lg:p-20 space-y-6" color="transparent" shadow={false}>
                <Typography className="text-center" variant="h4" color="blue-gray">
                    Add New Item
                </Typography>
                <Typography color="gray" className="mt-1 text-center font-normal">
                    Welcome to ArtisanAura&apos;s item addition page! Easily add your artisan products to our collection. Show off your craft and reach customers worldwide.
                </Typography>
                <hr />
                <div className="w-full flex items-center justify-center">
                    <form onSubmit={handleSubmit} className="mt-8 w-full mb-2 max-w-screen-lg">
                        <div className="space-y-6">
                            <div className="mb-1 flex flex-col md:flex-row gap-6">
                                <Input required name="name" color="blue" label="Item Name" />
                                <Input required name="photo" color="blue" label="Photo URL" />
                            </div>
                            <div className="mb-1 flex flex-col md:flex-row gap-6">
                                <Input required type="text" name="price" color="blue" label="Price" />
                                <select required name="subcategory" className="border w-full border-gray-400 rounded-md p-1 " defaultValue="">
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
                                <Input required type="text" name="rating" color="blue" label="Rating" />
                                <select required name="customization" className="border w-full border-gray-400 rounded-md p-1" defaultValue="">
                                    <option value="">Select Customization</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="mb-1 flex flex-col md:flex-row gap-6">
                                <Input required name="time" color="blue" label="Processing Time" />
                                {/* <Input name="stock" color="blue" label="Stock Status" /> */}
                                <select required name="stock" className="border w-full border-gray-400 rounded-md p-1" defaultValue="">
                                    <option value="">Stock Status</option>
                                    <option value="In stock">In stock</option>
                                    <option value="Made to Order">Made to Order</option>
                                </select>
                            </div>
                            <div className="mb-1 flex flex-col md:flex-row gap-6">
                                <Input defaultValue={user?.email} name="email" color="blue" label="User Email" />
                                <Input defaultValue={user?.displayName} name="userName" color="blue" label="User Name" />
                            </div>
                            <Textarea required name="description" color="blue" label="Short Description" />
                        </div>
                        <Button type="submit" className="mt-6" fullWidth>
                            Add Item
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}
