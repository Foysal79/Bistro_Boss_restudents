import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const FoodCard = ({item}) => {
    const { image, price, name, recipe, _id} = item || {}

    const { user } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const handleAddToCart = (food) => {
      console.log(food, user?.email);
        if(user && user.email)
           {
           /// send cart item to the database

           const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price


           }

           axiosSecure.post("/carts", cartItem)
           .then(res => {
            console.log(res.data);
            if(res.data.insertedId) 
            {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your food save in cart",
                showConfirmButton: false,
                timer: 1500
              });
            }
           })


  


             }

            else{
  
            Swal.fire({
            title: "Error!",
            text: "Please login first!",
            icon: "error"
           });
           navigate('/login', { state:{from: location}})
}
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-full" src={image} alt="Shoes" /></figure>
  <p className="bg-slate-600 text-white py-2 px-7 text-xl font-bold" > $ {price}</p>
  <div className="card-body">
    
    <h2 className="card-title text-center">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={() => handleAddToCart(item) } className="btn btn-outline bg-slate-100 border-0 border-b-4 border-b-orange-400 mt-4">Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;