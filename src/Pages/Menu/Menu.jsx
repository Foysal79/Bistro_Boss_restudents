import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import img from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import useMenu from "../../Hooks/useMenu";
import SectionTitel from "../../Components/SectionTitel/SectionTitel";
import MenuCategory from "./MenuCategory/MenuCategory";



const Menu = () => {


    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro || Menu</title>
            </Helmet>
            <Cover img={img} title={"Our Menu"}  ></Cover>
            {/* main cover */}
            <SectionTitel subHeading={"Don't Miss"} heading={"Today's Offer"} ></SectionTitel>
            {/* offered menu items */}
            <MenuCategory items={offered} ></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory title={"dessert"} coverImg={dessertImg} items={dessert} ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory title={"pizza"} coverImg={pizzaImg} items={pizza} ></MenuCategory>
            {/* soup menu items */}
            <MenuCategory title={"soup"} coverImg={soupImg} items={soup} ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory title={"salad"} coverImg={saladImg} items={salad} ></MenuCategory>
            
        </div>
    );
};

export default Menu;