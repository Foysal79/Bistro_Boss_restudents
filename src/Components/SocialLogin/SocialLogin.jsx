import { FaGoogle } from "react-icons/fa";
import useAuth from './../../Hooks/useAuth';
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const handelGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email : result.user?.email,
                name : result.user?.displayName
            }

            axiosPublic.post('/users', userInfo)
            .then(res => {
               console.log(res);
               navigate('/')
            })


            
        })
    }

    return (
        <div>
             <div className="divider" >  </div>
            <button onClick={handelGoogleSignIn}  className="btn w-full  bg-gray-300 " > <FaGoogle className="text-4xl" ></FaGoogle> </button>
        </div>
    );
};

export default SocialLogin;