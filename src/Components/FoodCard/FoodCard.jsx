
const FoodCard = ({item}) => {
    const {image, price, name, recipe} = item || {}
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-full" src={image} alt="Shoes" /></figure>
  <p className="bg-slate-600 text-white py-2 px-7 text-xl font-bold" > $ {price}</p>
  <div className="card-body">
    
    <h2 className="card-title text-center">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-b-orange-400 mt-4">Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;