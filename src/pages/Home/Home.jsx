import Banner from "../../components/Banner";
import Categories from "../../components/Categories";
import CraftAndItems from "../../components/CraftAndItems";
import WhyChooseUs from "../../components/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner />
            <CraftAndItems />
            <Categories/>
            <WhyChooseUs/>
        </div>
    );
};

export default Home;