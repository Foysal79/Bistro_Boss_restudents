import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";


const Dashboard = () => {

  const [admin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400 " >
               <ul className="menu p-4 space-y-4" >
               
               {
                admin ? <>
                <li>
               
               <NavLink to="/dashboard/adminHome" >
               <FaHome className="text-white" ></FaHome>
               Admin Home </NavLink>

                </li>

                <li>
               
               <NavLink to="/dashboard/addItems" >
               <FaUtensils className="text-white" > </FaUtensils>
               Add Items </NavLink>

                </li>

                <li>
               
               <NavLink to="/dashboard/manageItems" >
               <FaList className="text-white" > </FaList>
               Manage Items </NavLink>

                </li>

                <li>
               
               <NavLink to="/dashboard/bookings" >
               <FaBook className="text-white" > </FaBook>
               Manage Bookings </NavLink>

                </li>

                <li>
               
               <NavLink to="/dashboard/users" >
               <FaUsers className="text-white" > </FaUsers>
               All Users </NavLink>

                </li>


                </> 
                : 
                <>
                <li>
               
               <NavLink to="/dashboard/userHome" >
               <FaHome className="text-white" ></FaHome>
                  User Home </NavLink>

                </li>
             <li>
             
               <NavLink to="/dashboard/reservation" >
               <FaCalendar className="text-white" ></FaCalendar>
                  Reservation </NavLink>

                </li>
                <li>
             
               <NavLink to="/dashboard/cart" >
               <FaShoppingCart className="text-white" ></FaShoppingCart>
                  My Cart </NavLink>

                </li>
                <li>
             
               <NavLink to="/dashboard/review" >
               <FaAd className="text-white" >  </FaAd>
               Review </NavLink>

                </li>
                <li>
             
               <NavLink to="/dashboard/bookings" >
               <FaList className="text-white" ></FaList>
               My Bookings </NavLink>

                </li>
                 </>
               }
                  <div className="divider" ></div>
                  <li>
               
                 <NavLink to="/" >
                 <FaHome className="text-white" ></FaHome>
                     Home </NavLink>

                  </li>
                  <li>
               
                 <NavLink to="/order/salad" >
                 <FaSearch className="text-white" ></FaSearch>
                     Menu </NavLink>

                  </li>
                  <li>
               
                 <NavLink to="/order/salad" >
                 <FaVoicemail className="text-white" >  </FaVoicemail>
                     Contact </NavLink>

                  </li>
               
               </ul>

            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8" >
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;