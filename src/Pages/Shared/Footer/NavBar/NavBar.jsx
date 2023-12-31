import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../../Hooks/useCart';

const NavBar = () => {

  const {user, logOut} = useContext(AuthContext);

  const [cart] = useCart();
  console.log(cart.length);

  const handelLogOut = () => {
    logOut()
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error.message)
    })
  }

    const NavOption = <>
    <li> <a> <Link to='/' > Home </Link> </a> </li>
    <li> <a> <Link to='/Secret' > Secret </Link> </a> </li>
    <li> <a> <Link to='/menu' >Our Menu </Link> </a> </li>
    <li> <a> <Link to='/order/salad' > Order Food </Link> </a> </li>

    <li> <a> <Link to="/dashboard/cart" > <button className='btn' ><FaShoppingCart /> <div className='badge badge-secondary' > {cart.length} </div> </button> </Link> </a> </li>
    

    {
      user ? <> <button onClick={handelLogOut} className='btn btn-ghost' >Logout</button> </>  :  <> <li> <a> <Link to='/login' >Login </Link> </a> </li> </>
    }
   
    
    </>


    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            NavOption
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        NavOption
      }
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
            
        </>
    );
};

export default NavBar;