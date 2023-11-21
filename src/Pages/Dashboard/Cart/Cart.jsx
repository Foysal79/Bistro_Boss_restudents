import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce( (total, item) => total + item.price , 0 ) 

    const axiosSecure = useAxiosSecure();

    

    const handleDelete = (id) => {

      console.log(id);
      
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
       
    axiosSecure.delete(`/carts/${id}`)
    .then(res => {
      if(res.data.deletedCount > 0)
      {
         Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

    refetch();
      }
    })
 

    
  }
});


    }
    return (
        <div>
            <div className="flex justify-evenly" >
            <h2 className="text-5xl " >Items : {cart.length}  </h2>
            <h2 className="text-5xl " >Total Price : {totalPrice}  </h2>
            <button className="btn btn-primary" >pay</button>
            </div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          Number
        </th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            cart.map((item, index) =>  <tr key={item._id}>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                     
                    </div>
                  </div>
                </td>
                <td>
                 {
                  item.name
                 }
                </td>
                <td> $ {item.price}</td>
                <th>
                  <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg text-4xl"> 
                  
                  <FaTrashAlt className="text-red-600 " ></FaTrashAlt>

                      </button>
                </th>
              </tr> )
        }
     
     
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Cart;